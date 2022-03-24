const express = require("express");
const todoController = require("./controllers/todoController");   // Importing the todoController() function
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

// Controllers
todoController(app);

app.listen(3000);
console.log("You're listening to port: 3000");
