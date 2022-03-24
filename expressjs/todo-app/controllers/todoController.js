// Dummy Data

let data = [
  {
    item: "Feed the dog"
  },
  {
    item: "Learn Node JS"
  },
  {
    item: "Go Shopping"
  }
];

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {

  // Request to get the dummy data on the app

  app.get("/todo", (req, res) => {
    res.render("todo", { todos: data });
  });

  // Request to add a todo item

  app.post("/todo", urlencodedParser, (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  // Request to delete a todo item

  app.delete("/todo/:item", (req, res) => {
    data = data.filter((todo) => todo.item.replace(/ /g, "-") !== req.params.item);
    res.json(data);
  });
};
