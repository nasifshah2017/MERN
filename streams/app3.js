const http = require("http");
const fs = require("fs");


// Now, we will send the user the write-me .txt file

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");   // Reading the data in the index file

  readStream.pipe(res);     // Takes the data read from the readStream and then passes it to the res
                            // and the res (response) takes it to the user.
});

server.listen(3000, '127.0.0.1');
