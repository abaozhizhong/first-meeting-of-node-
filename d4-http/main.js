var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.home;
handle['/about'] = requestHandlers.about;
server.start(router.route,handle);
console.log(handle);//   { '/': [Function: home], '/about': [Function: about] }
console.log(router.route)// [Function]