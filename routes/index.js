var express = require("express");
var router = express.Router();
const PORT = 8080;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

connect("test").then(database => {
  db = database;
  applicationCache.addEventListener(PORT, () =>
    console.log("listening! on ${PORT}")
  );
});
