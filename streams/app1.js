const http = require("http");
const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/read-me.txt", "utf-8");   // Reading the data in the text file
const writeStream = fs.createWriteStream(__dirname + "/write-me.txt");  


readStream.on("data", (chunk) => {    // Everytime it receives the data this function gets fired
  console.log("new data received");
  console.log(chunk);
  writeStream.write(chunk);           // It writes the data it receives on the write-me.txt file
});
