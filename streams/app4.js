const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  console.log(req.url);

  const person = {
    name: "alex",
    email: "alex@email.com",
    job: "designer"
  };

  res.end(JSON.stringify(person));

});

server.listen(3000, '127.0.0.1');
