const express = require('express');
const router = express.Router();

const date = new Date();
const currentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: currentDate,
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: currentDate,
    },
  ];
  
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});

module.exports = router;
