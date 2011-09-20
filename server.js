//These are required node library files to assist us.
var sys = require('sys'),
   http = require('http');

//http is the http library
//so on every request the given function will be called with a request and a response argument. 
http.createServer(function (req, res) {
  //write out the response headers
  res.writeHead(200, {'Content-Type': 'text/html'});
  //finish it up with what you want to send to the client
  res.end("Hello!");
}).listen(80); //Tell it to listen on port 8000