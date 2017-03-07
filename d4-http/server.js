var http = require('http');
var url = require("url");
var fs = require("fs");
//ip与端口
//实际应用，把这些写到配置文件中
var host = "127.0.0.1",
    port = 8080;

function start(route,handle){

    function onRequest(req,res) {

        var pathname = url.parse(req.url).pathname;
        console.log('Request for'+pathname+'received.');

        route(handle,pathname,res,req);
    }

    http.createServer(onRequest).listen(port,host);
    console.log('Server has steared and listening on '+ host + ":" + port);
}

exports.start = start;