require("http").createServer(function (req, res) {
  res.writeHead(200, {})
  res.end("Hello, world!")
}).listen(80)
console.log("waiting to say hello.")

var foobar = require("./foobar"),
       sys = require("sys");

sys.puts("Foobar: " + foobar.bar("bar"));
