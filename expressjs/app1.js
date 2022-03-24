const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/profile/:name", (req, res) => {
  res.send("Profile name is " + req.params.name);
});

app.listen(3000);
