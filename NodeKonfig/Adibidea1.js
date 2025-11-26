const http = require('http')
http.createServer(function(request, response)
{
    response.writeHead(200, {'Content-type':'text/plain'});
    response.end("Kaixo mundua!\n");
}).listen(8000);
console.log("http://localhost:8000 zerbitzaria entzuten!");
