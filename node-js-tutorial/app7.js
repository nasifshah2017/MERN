// Importing the "fs" module and assigning it to the variable "fs"

const fs = require("fs");


// Deleting a file using the "fs" module
// The 1st parameter takes the name of the file that we want to delete
// The 2nd parameter takes a callback function that will trigger if there is an error

/*  fs.unlink("write.txt", (error) => {
      console.log(error);
    })  */


// Synchronous way of creating a Directory

// The parameter takes the name of the directory that we want to create

// fs.mkdirSync("my-folder");  // "mkdir" stands for "make directory"


// Synchronous way of deleting a Directory

// The parameter takes the name of the directory that we want to delete

// fs.rmdirSync("my-folder");  // "rmdir" stands for "remove directory"


// Asynchronous way of creating a Directory

/*  fs.mkdir("my-folder", () => {
      fs.readFile("read-me.txt", "utf-8", (error, data) => {
        fs.writeFile("./my-folder/write-me.txt", data, () => {

        })
      })
    });   */


// Asynchronous way of deleting a Directory

// First we need to remove the files in that directory as we cannot delete a
// directory unless it is empty. Then inside the unlink() function we can run
// rmdir() method to delete the directory

fs.unlink("./my-folder/write-me.txt", () => {
  fs.rmdir("my-folder", (error) => {
    console.log(error);
  })
})
