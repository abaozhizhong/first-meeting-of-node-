var net = require("net");
var client = net.connect({port:8080},function(){
    console.log('connected to server');
    client.write("World!");
})

client.on('data',function(data){
    console.log('client got data from server:',data.toString());
    client.end();
})

client.on('end',function(data){
    console.log('disconnected from server');
})