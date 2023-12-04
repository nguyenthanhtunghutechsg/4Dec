var http = require("http");

const fs = require('fs');

const config = require('./configs/configServer');
const render = require('./configs/render');


http.createServer(function (request, response) {
    render.onRequest(request,response);
}).listen(config.port);

// Console will print the message
console.log(`Server running at ${config.domain}:${config.port}/`);