var express = require('express');
var app = express();

app.use(express.static('app'));

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server up and running on port ' + port);
});
