import express from "express";
const router = express.Router();
import path from "path";
import moment from "moment";

moment().format();
moment().locale("LLL");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/favicon.ico", function (req, res) {
  res.status(204);
});

router.get("/:date", function (req, res) {
  const date = req.params.date;
  const parsed = Date.parse(date);
  if (!isNaN(parsed) && !moment.unix(parseInt(date)).isValid()) {
    res.send({
      unix: parsed,
      natural: date,
    });

    return;
  } else if (!isNaN(parsed) && !moment.unix(parseInt(date)).isValid()) {
    res.send({
      unix: parsed,
      natural: date,
    });
  } else {
    res.send({
      unix: +date,
      natural: moment.unix(parseInt(date)).format("MMMM DD, YYYY"),
    });
  }
});

module.exports = router;
