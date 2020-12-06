var http = require('http');
var dt = require('./date_module');

http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time: " + dt.myDateTime());
    res.write(req.url);
    res.end();
}).listen(8081);