var http = require("http");

http.createServer(function (request, response) {
	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World, my name is Peter Minges\n')
	response.end();
}).listen(8001);