var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.patch("/", function(req, res, next) {
  let myData = db.collection("users");

  myData.patch(req.body, (err, result) => {
    if (err) throw err;
  });
});

module.exports = router;
