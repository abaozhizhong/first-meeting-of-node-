var fs = require('fs');

function route(handle,pathname,res,req){
    console.log('about to route a request for '+pathname);

    if(typeof handle[pathname] == 'function'){
        handle[pathname](res,req);
    }else{
        //res?,req?都是什么对象来哒？
        console.log('Nm request handle found for '+ pathname);
        var content = fs.readFileSync('./views/404.html');
        res.writeHead(404,{'Content-Type':'text.html'});
        res.write(content);
        res.end();
    }
}

exports.route = route;