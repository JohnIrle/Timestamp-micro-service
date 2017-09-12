var express = require('express');
var app = express();
var routes = require('./routes/index');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use('/', routes);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
