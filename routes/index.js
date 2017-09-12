const express = require('express');
const router = express.Router();
const path = require('path');
const moment = require('moment');

moment().format();
moment().locale('LLL');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/favicon.ico', function(req, res) {
    res.status(204);
});

router.get('/:date', function(req, res) {
  const date = req.params.date;
  const parsed = Date.parse(date);
  if (!isNaN(parsed) && !moment.unix(date).isValid()) {
    res.send({
      unix: parsed,
      natural: date
    });

    return;
  } else if (!isNaN(parsed) && !moment.unix(date).isValid()) {
    res.send({
      unix: parsed,
      natural: date
    });
  } else {
    res.send({
      unix: +date,
      natural: moment.unix(date).format("MMMM DD, YYYY")
    });
  }
});

module.exports = router;
