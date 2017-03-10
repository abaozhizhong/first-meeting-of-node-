console.log('in');
var net = require('net');

//创建Tcp服务器
var server = net.createServer();

console.log(net.sockets);
//用来当存 sockets
var sockets = [];
//当服务端与客户端进行连接的时候 发生的事件connection
server.on('connection',function(socket){
    console.log('Got a new connection');
    sockets.push(socket);
    socket.on('data',function (data) {
        console.log('Got data:',data);
        // if(data.toString() == '2'){
            server.close();
        // }
        sockets.forEach(function(otherSocket){
            if(otherSocket !== socket){
                otherSocket.write(data);
            }
        })

        socket.on('close',function () {
            console.log('A client connection closed');
            console.log(net.sockets)
            var index = sockets.indexOf(socket);
            sockets.splice(index,1);
            console.log(sockets)
        })
    })
})

//服务器发生出错的时候发生的事件
server.on('error',function(err){
    console.log('Server error',err.message);
});

// 服务器 关闭的时候发生的事件
server.on('close',function(){
    console.log('Server closed');
})

server.listen(8080);

