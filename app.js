var express = require('express');
var app = express();

// Andy 的音樂列表，抓前10筆
app.get('/music/list', function(req, res){
    var limit = req.query.limit;
    console.log(req.query);    
})

var userHtml = '<html><head></head><body><h1>Andy</h1></body></html>';
app.get('/user', function(req, res){
    res.send(userHtml);
})

app.get('/user/:name/', function(req, res){
    var myName = req.params.name;
    console.log(myName);
    if(myName !== 'andy'){
        res.send('<html><head></head><body><h1>查無此人</h1></body></html>');
    }else{
        res.send('<html><head></head><body><h1>edit '+  myName +' profile</h1></body></html>');
    }
})

app.get('/user/edit-image', function(req, res){
    res.send('<html><head></head><body><h1>edit image</h1></body></html>');
})

//監聽 port
var port = process.env.PORT || 3000;
app.listen(port);

