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
  const parsedDate = Date.parse(date) / 1000;

  const naturalDate = !isNaN(parsedDate) && !moment.unix(parseInt(date)).isValid()

  if (naturalDate) {
    res.send({
      unix: parsedDate,
      natural: date,
    });
  } else {
    res.send({
      unix: +date,
      natural: moment.unix(parseInt(date)).format("MMMM DD, YYYY"),
    });
  }
});

export default router;
