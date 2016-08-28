var express = require('express');
var React = require('react');
var path = require("path");
var compression = require('compression');
var app = express();

app.use('/', express.static('public'));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(process.env.PORT || 3000);
