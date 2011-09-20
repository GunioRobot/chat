var sys = require('sys'),
   http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  //Add a listener to the request for the request body data
  var thing = null;
  req.addListener('data', function(data){
    thing = data.toString();
    }).addListener('end', function() {
      res.end("Hello, "+thing+".");
    });  

}).listen(80);