// Read and Write file using the Node JS core module "fs"

// Importing the "fs" module and assigning it to the variable "fs"

const fs = require("fs");

// Reading the "read-me.txt" file and storing the content thats read in the "text" variable

// const text = fs.readFileSync("read-me.txt", "utf-8");

// console.log(text);

// Writing on a file called "write.txt" and the 2nd parameter we are passing is the data
// we want to write on the file, which in this case the text variable that contains the
// content that we received by reading the "read-me.txt" file.

// const text = "text";

// fs.writeFileSync("write.txt", text);


// Asynchronous way of reading a file

// As it is an Asynchronous way, we need a callback function to fire when the process
// is complete and it is going to be the 3rd parameter that is being sent in this function
// and in that function we need to write to the file the data that we want to read.

fs.readFile("read-me.txt", "utf-8", function(error, data) {
  fs.writeFile("write.txt", data, function(error) {
    if(error) {
      console.log(error);
    }
  })
});
