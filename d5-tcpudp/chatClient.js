var net = require('net');
//?
process.stdin.resume();
process.stdin.setEncoding("utf8");

var client = net.connect({port:8080},function () {
    console.log('Connected to server');

    console.log('input:');
    process.stdin.on('data',function (data) {
        console.log('input:');
        client.write(data);
        if(data == 1){
            client.end();
        };
        console.log("after sending");
    })
})

client.on('data',function (data) {
    console.log("Other user\'s input",data.toString());
})

client.on('end',function () {
    console.log('Disconnect from server');
    process.exit();
})


//mall_listall.htm
//mall-list-goodsType-101091.htm

// <style>
// .mall-row {
//     margin: 7em auto 10px;
// }
// </style>
