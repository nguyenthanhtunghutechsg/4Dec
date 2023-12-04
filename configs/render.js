const fs = require('fs');


function show404(response){
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('<h1>File not found</h1>\n')
}
function showHTML(path,response){
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            show404(response);
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
        }
        response.end();
    });
}
function OnRequest(request,response) {
    var path = request.url;
    if (path == '/about') {
        showHTML('views/about.html',response);
    } else if (path == '/') {
        showHTML('views/index.html',response);
    }
}
module.exports ={
    showError:show404,
    showHTML:showHTML,
    onRequest:OnRequest,
}