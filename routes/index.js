var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Message Form" });
  res.send("respond with a resource");
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  console.log(messages);
  res.redirect("/");
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
