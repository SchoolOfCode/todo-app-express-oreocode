var express = require("express");
var router = express.Router();
let connect = require("../connect");
// show mardown here

connect("Todo").then(database => {
  db = database;
});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "..", "main.html"));
});

// let sendNewToDo = () => {
//   let objToSend = {};
//   objToSend = {
//     user: jaskaran,
//     id: todoId,
//     date: date,
//     description: description,
//     status: status
//   };
//   console.log(objToSend[userId]);
//   fetch(`localhost:3000/users/todo/${userId}`, {
//     method: "POST",
//     body: JSON.stringify({
//       title: "newToDo",
//       body: objToSend[userId]
//     }),
//     headers: {
//       Accept: "application/json",
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
// .then(refreshTodos)
// .then(inputUser.value = "")
// .then(inputId.value = "")
// .then(inputDate.value = "")
// .then(inputDescription.value = "")
// .then(inputStatus.value = "")
// .catch(err => console.err(err))
//  };

const todoList = document.getElementbyId("todoList");
const inputUser = document.getElementById("inputUser");
const inputId = document.getElementById("inputId");
const inputDate = document.getElementById("inputDate");
const inputDescription = document.getElementById("inputDescription");
const inputStatus = document.getElementById("inputStatus");

refreshTodos = () => {
  todoList.innerHTML = "";
};

//login get and check user credentials

// router.post("/", function(req, res, next) {
//   let myData = db.collection("users");
//   let { user, password } = req.body;
//   myData
//     .find({ userId: user })
//     .toArray()
//     .then(data => console.log(data));
//   if (user === data[0]) {

//     if (password === data[1]) {
//       return res.status(201).json({ message: "login in successful" });
//     }
//   }
// });

module.exports = router;
