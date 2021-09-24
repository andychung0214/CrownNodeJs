var express = require('express');
var app = express();

var hiHtml = '<html><head></head><body><h1>Hi</h1></body></html>';
app.get('/', function(req, res){
    res.send(hiHtml);
})

var userHtml = '<html><head></head><body><h1>Andy</h1></body></html>';
app.get('/user', function(req, res){
    res.send(userHtml);
})

//監聽 port
var port = process.env.PORT || 3000;
app.listen(port);

