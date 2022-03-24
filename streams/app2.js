const http = require("http");
const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/read-me.txt", "utf-8");   // Reading the data in the text file
const writeStream = fs.createWriteStream(__dirname + "/write-me.txt");

// The alternative way of receiving the data and writing it on a file using the pipe() method

readStream.pipe(writeStream);   // Takes the data read from the readStream and then passes it to writeStream
                                // to write it on the write-me.txt file.
