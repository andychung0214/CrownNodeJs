var express = require('express');
var app = express();

//增加靜態檔案的路徑
app.use(express.static('public'))


var inHtml = '<html><head></head><body><h1>Andy</h1><img src="/images/logo.jpg"></body></html>';
app.get('/', function(req, res){
    res.send(inHtml)
})

app.use(function(req, res, next){
    console.log('有人進來了')
    zz();
    next();
})

app.use(function(req, res, next){
    console.log('已通過驗證')
    next();
})

app.use(function(req, res, next){
    res.status(404).send('Sorry This Page Not Found');
})

app.use(function(err, req, res, next){
    res.status(500).send('程式有問題，請稍後嘗試')
})

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

