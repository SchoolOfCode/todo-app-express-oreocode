var express = require("express");
var router = express.Router();
let bodyParser = require("body-parser");
let connect = require("../connect");
let db;

connect("Todo").then(database => {
  db = database;
});

// create new user
router.post("/", function(req, res, next) {
  let myData = db.collection("users");
  let newUser = { user: {} };
  newUser[user] = req.body;
  myData.insertOne(newUser, (err, result) => {
    if (err) throw err;
    return res.status(201).json({ message: "New user CREATED successfully" });
  });
});

module.exports = router;
