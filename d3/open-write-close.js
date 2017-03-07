/**
 * Created by huangjian on 2017/3/7.
 */
var fs = require('fs');
fs.open('/index/write/index.txt','w',function(err,fd)   {
    if(err){
        throw err;
    }
    //写的话 buffer 就变成需要写入的内容
    var buffer = new Buffer('BzBzBz');

    fs.write(fd,buffer,0,2,0,function(err,written,buffer){
        //注意这里2对应着 length 参数就是当与杯子  buffer相当于水 水再多也没用 会溢出
        //注意参数length>buffer.byteLength 会出现范围错误  range.err
        if( err ){
            throw err;
        }
        console.log('write success');
        var byteLength = buffer.byteLength;
        console.log(byteLength);
        console.log(buffer.slice(0,byteLength).toString());
        fs.close(fd);
    })
})