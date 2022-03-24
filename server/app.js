const http = require("http");


const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello world");
});


console.log("port 3000");
server.listen(3000, "127.0.0.1");
