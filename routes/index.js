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

//login get and check user credentials

router.post("/", function(req, res, next) {
  let myData = db.collection("users");
  let { user, password } = req.body;
  console.log(user);
  console.log(password);
  myData
    .find({ userId: user })
    .toArray()
    .then(data => console.log(data));
  if (user === data[0]) {
    console.log(data[0]);
    if (password === data[1]) {
      return res.status(201).json({ message: "login in successful" });
    }
  }
});

module.exports = router;
