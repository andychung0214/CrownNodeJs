var express = require('express');
var app = express();

var path = require('path');
var user = require('./routes/user');
var favicon = require('serve-favicon');
var engine = require('ejs-locals');
// var bodyParser = require('body-parser');

app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');

//增加靜態檔案的路徑
app.use(express.static('public'))

//USE Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use('/user', user);

//增加 body 解析
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

app.get('/', function(req, res){
   res.send('in home page');
   console.log('Have People Come In');
})

// app.get('/user', function(req, res){
//     res.render('user')
// })

app.get('/search', function(req, res){
    res.render('search');
})

app.post('/searchList', function(req, res){
    console.log(req.body);
    //轉址
    res.redirect('search');
})

app.post('/searchAJAX', function(req, res){
    console.log(req.body);
    console.log(req.body.list[2]);
    res.send('Hello Ajax');
})


//監聽 port
var port = process.env.PORT || 3000;
app.listen(port);

