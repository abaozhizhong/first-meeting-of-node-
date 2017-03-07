var fs = require("fs");
//  在本目录下创建  ./mkdirByBz
//  c盘下创建 一系列路径的目录
fs.mkdir("C:/dirByNode/index",function(err){
    if(err){
        throw err;
    }
    console.log("make dir success" );
})