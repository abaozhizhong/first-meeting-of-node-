var http = require('http');
var server = http.createServer();
server.addListener('request',function(req,res){
    res.writeHead(200,{'Content-Type':"text/plain"});
    res.end("Hellow World\n");
    console.log('visited')
    //为什么刷新的时候是会打印两次
});
server.listen(1000,'127.0.0.1');
console.log("running");

// var http = require('http');
// var server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':"text/plain"});
//     res.end("Hellow World\n");
//     console.log("vivsited");
// }).listen(1000,'127.0.0.1');
// console.log('running');