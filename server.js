const moongose = require("mongoose");
require("dotenv").config();
const Person = require("./models/Person");
const URI = process.env.URI;
moongose
  .connect(URI)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));
// create one record

async function createPerson() {
  try {
    const newPerson = await Person({
      name: "Christian Lewis",
      age: 25,
      favoriteFoods: ["Pizza", "Pasta"],
    });
    await newPerson.save();
  } catch (error) {
    return error;
  }
}
createPerson().then(() => "person was created successfully");
//   create many records
async function createPerson() {
  try {
    await Person.create([
      { name: "Howard Nguyen", age: 55, favoriteFoods: ["mlewi", "tabona"] },

      { name: "josie fowler", age: 40, favoriteFoods: ["chappati", "ma9loub"] },

      { name: "jhon cena", age: 44, favoriteFoods: ["sushi", "Cordon bleu"] },

      { name: "jhosef riahi", age: 50, favoriteFoods: ["hargma", "gazoza"] },
    ]);
  } catch (error) {
    return error;
  }
}
//createPerson().then(()=> console.log("persons was created successfully")).catch((err)=>console.log(err));
async function getPersons() {
  try {
    const data = await Person.find({
      name: "Jeff Lane",
    });
    console.log(data);
  } catch (error) {
    return error;
  }
}
//getPersons()
async function getPerso() {
  try {
    const data = await Person.find({
      favoriteFoods: { $elemMatch: "Sushi" },
    });
    console.log(data);
  } catch (error) {
    return error;
  }
}
// getPerso();

async function getPersonWithId() {
  try {
    const data = await Person.findById("664b025421f1a5cf6b03ad04");

    console.log(data);
  } catch (error) {
    return error;
  }
}
//getPersonWithId();

async function updatePersonWithId() {
  try {
    const data = await Person.findByIdAndUpdate(
      "664b025421f1a5cf6b03ad04",
      {
        $push: { favoriteFoods: "Teramisu" },
      },
      { new: true }
    );
    return data;
  } catch (error) {
    return error;
  }
}
updatePersonWithId();
//.then ((data)=>console.log(data))
//catch((err) =>console.log(err));//
async function deletePersonWithId() {
  try {
    const data = await Person.findByIdAndDelete("664b025421f1a5cf6b03ad05");
    return ("Person was delete")
    return data;
  } catch (error) {
    return error;
  }
}
//deletePersonWithId()
  //.then((data) => console.log(data))
  //.catch((err) => console.log(err));

  Person.find()
  .sort({ age:"desc"})
  .limit(2).select({age:0})
  .then((data)=>console.log(data));