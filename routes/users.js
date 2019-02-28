var express = require("express");
var router = express.Router();
let bodyParser = require("body-parser");
let connect = require("../connect");
// // list all users
let db;
connect("Todo").then(database => {
  db = database;
  console.log("users");
});

connect("Todo").then(database => {
  db = database;
});

/* GET ALL users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.patch("/:userId", function(req, res, next) {
  //find id of post
  var userId = req.params;
  //Connect to database
  let myData = db.collection("users");
  console.log(req.body);
  console.log("req body", req.body["description"]);

  let criteria = { user: userId["userId"] };
  console.log(userId);
  let update = { $set: { description: req.body["description"] } };

  //amend note
  myData.update(criteria, update);
  return res.status(201).json({ message: "update completed" });
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
