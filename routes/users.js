var express = require("express");
var router = express.Router();

router.get("/new", function (req, res, next) {
  res.render(messages);
  res.send("respond with a resource");
});

module.exports = router;
