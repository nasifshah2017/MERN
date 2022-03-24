const mongoose = require("mongoose");
const Student = require("../src/student");
const Comment = require("../src/comment");
const ArticleBlog = require("../src/articleBlog");

describe("Association Test", () => {
  let jason, articleBlog, comment;

  beforeEach(done => {
    jason = new Student({name: "Jason"});
    articleBlog = new ArticleBlog({title: "MongoDb", content: "Mongoose and Mocha"});
    comment = new Comment({content: "Well done!!!"});

    jason.articleBlog.push(articleBlog);
    articleBlog.comments.push(comment);

    Promise.all([jason.save(), articleBlog.save(), comment.save()])
    .then(() => done())
  });

  it("Associate student with articleBlog", done => {
    Student.findOne({name: "Jason"})
      .populate("articleBlog")
      .then(student => {
        console.log(student.articleBlog[0]);
        done();
      })
  })

  it.only("Nested populate", done => {
    Stydent.findOne({name: "Jason"})
    .populate({
      path: "articleBlog",
      populate: {
        path: "comments",
        model: "comment",
        populate: {
          path: "students",
          model: "student"
        }
      }
    })
    .then(student => {
      console.log(student.articleBlog[0].comments[0]);
      done()
    })
  })
});
