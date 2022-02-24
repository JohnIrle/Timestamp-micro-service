import express from "express";
const router = express.Router();
import path from "path";
import moment from "moment";

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/favicon.ico", (req, res) => {
  res.status(204);
});

router.get("/:date", (req, res) => {
  const { date } = req.params;

  // Parse date assuming 12 AM UTC
  const parsedDate = Date.parse(`${date} 00:00:00Z`) / 1000;

  // Check if parsedDate is valid number and not valid unix.
  const naturalDate = !isNaN(parsedDate) && !moment.unix(parseInt(date)).isValid()

  if (naturalDate) {
    res.send({
      unix: parsedDate,
      natural: date,
    });
  } else {
    res.send({
      unix: +date,
      natural: moment.unix(parseInt(date)).utc().format("MMMM DD, YYYY"),  // Parse unix date and make sure UTC is honored.
    });
  }
});

export default router;
