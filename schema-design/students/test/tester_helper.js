const mongoose = require("mongoose");
const { deleteOne } = require("../src/student");

mongoose.connect("mongodb://localhost/students_test",
  {useNewUrlParser: true, useUnifiedTopology: true,});

mongoose.connection
  .once("open", () => console.log("We are connected!"))
  .on("error", (error) => {
    console.warn("An error occured!", error)
  })

  beforeEach((done) => {
    //  mongoose.connection.collections.students.drop();
    //  done()

    const { students, comments, articleBlog } = mongoose.connection.connections;

    students.drop(() => {
      comments.drop(() => {
        articleBlog.drop(() => {
          done()
        })
      })
    })
  })
