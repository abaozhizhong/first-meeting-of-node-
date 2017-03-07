// 读取文件夹的东西
var fs = require('fs');
fs.readdir('./mkdirByBz', function (err, files) {
    if(err){
        throw err;
    }
    console.log(files);
});
