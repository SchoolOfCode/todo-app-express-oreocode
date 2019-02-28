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

module.exports = router;
