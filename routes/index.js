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
  if (!isNaN(parsed)) {
    res.send({
    unix: parsed,
    natural: date
  });
    console.log(isNaN(parsed));
    return;
  }

  res.send({
      unix: +date,
      natural: moment.unix(date).format("MMMM DD, YYYY")
    });

  console.log(isNaN(parsed));
})

module.exports = router;
