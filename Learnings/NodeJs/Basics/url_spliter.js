var http = require('http');
var url = require('url');

http.createServer(function(req,res){
   // res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url,true).query;
    console.log(q);
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8082);

//type the following in the url
//http://localhost:8081/?year=2017&month=July    