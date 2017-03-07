/**
 * Created by huangjian on 2017/3/7.
 */
var fs = require("fs");
fs.open('/index/read/index.txt', 'r+', function (err,fd) {
    if(err){
        throw err;
    }
    console.log("opening successfully");

    var buffer = new Buffer(255);
    // buffer 有多大？
    //fd是一个操作index.txt的代表符号
    fs.read(fd,buffer,0,64,0,function(err,bytesRead,buffer){
    //64读取文件的数据的长度
        if(err){
            throw err;
        }
        console.log('reading successfully');
        console.log(bytesRead);
        // .slice(0,bytesRead)  不切会乱码
        console.log(buffer.slice(0,bytesRead).toString());
        fs.close(fd);
    })

});

