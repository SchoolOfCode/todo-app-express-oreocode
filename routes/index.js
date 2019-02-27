var express = require("express");
var router = express.Router();
let connect = require("../connect");
// show mardown here

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

connect("Todo").then(database => {
  db = database;
});
