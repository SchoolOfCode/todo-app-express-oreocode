var express = require("express");
var router = express.Router();
let bodyParser = require("body-parser");
let connect = require("../connect");
// // list all users
let db;

connect("Todo").then(database => {
  db = database;
});

/* GET ALL users listing. */
router.get("/", function(req, res, next) {
  let myData = db.collection("users");
  myData
    .find({})
    .toArray()
    .then(data => res.json(data));
});

router.get("/todo/:userId", (req, res, next) => {
  let { userId } = req.params;
  console.log(userId);
  let myData = db.collection("users");
  query = { userId };
  console.log(userId);
  myData
    .find({ user: userId })
    .toArray()
    .then(data => res.json(data));
});

router.post("/todo/:userId", (req, res, next) => {
  let { userId } = req.params;
  let myData = db.collection("users");
  console.log(myData);
  let itemToInsert = req.body;
  console.log(itemToInsert);
  myData.insertOne(
    itemToInsert,
    (err, result) => {
      if (err) throw err;
      return res
        .status(201)
        .json({ message: "Entry added successfully", payload: result.ops[0] });
    }
    // Note that the insert method can take either an array or a dict.
  );
});

router.delete("/todo/:id", (req, res, next) => {
  let myData = db.collection("users");
  let { userId } = req.params;
  myData.deleteOne(userId, function(err, Obj) {
    if (err) throw err;
  });
  return res.json({ message: "entry deleted!" });
});

module.exports = router;
