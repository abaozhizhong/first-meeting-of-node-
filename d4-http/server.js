var http = require('http');
var url = require("url");
var fs = require("fs");
//ip与端口
//实际应用，把这些写到配置文件中
var host = "127.0.0.1",
    port = 8080;

function start(route,handle){

    function onRequest(req,res) {
        // 请求的时候执行这个程序
        //请求的时候将ip后面的url
        console.log(typeof  req.url);
        //请求的时候将ip后面的url
        console.log(typeof url.parse(req.url).pathname)
        //Url {    url.parse(req.url)出来的有好多信息都不懂。。。
        // protocol: null,
        //     slashes: null,
        //     auth: null,
        //     host: null,
        //     port: null,
        //     hostname: null,
        //     hash: null,
        //     search: null,
        //     query: null,
        //     pathname: '/about',
        //     path: '/about',
        //     href: '/about'
        // }
        var pathname = url.parse(req.url).pathname;
        //既然都是一样 为啥好药parse呢
        console.log('Request for：：：'+pathname+'received.');
        // 难道pathname后给route处理
        //res?req?
        route(handle,pathname,res,req);
    }

    var obj = http.createServer();
    obj.addListener('request',onRequest);
    obj.listen(port,host);

    // http.createServer(onRequest).listen(port.host);简化上面的代码

    console.log('Server has steared and listening on '+ host + ":" + port);
}

exports.start = start;