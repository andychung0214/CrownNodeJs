var http = require('http');

var path = require('path');

var a = 1;
var b = 2;
var c = 3;

console.log(__dirname);
console.log(__filename);

//路徑合併
console.log(path.join(__dirname, 'xx'));

//抓檔名
console.log(path.basename('/children/sub-children/testFile.js'));

//抓副檔名
console.log(path.extname('/children/sub-children/testFile.js'));

// console.log(path.dirname('/xx/yy/zz.js'));




// http.createServer(function(request, response){
//     // console.log(request.url);
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write('<h1>Hello Welcome</h1>');
//     response.end();
// }).listen(7878);