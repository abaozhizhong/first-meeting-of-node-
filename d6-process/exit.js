process.on('exit',function(code){
        // 注意这里是同步执行的，setTimeout是不会执行的(setTimeout是异步的)
        setTimeout(function(){
            console.log('This will not run');
        },0);
        console.log('exit code: ',code);
})