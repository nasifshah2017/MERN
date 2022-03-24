const assert = require("assert");
const Student = require("../src/student");

describe("Read the data", (done) => {
  let jason;
  let jason2;

  beforeEach(() => {
    jason = new Student({name: "Jason"});
    jason2 = new Student({name: "Jason"});
    jason.save()
    jason2.save()
    .then(() => done())
  })


  it("Find all Jasons", async () => {
    const students = await Student.find({name: "Jason"});
    console.log(students)
    assert(students[0]._id.toString() === jason._id.toString());
  })
})
