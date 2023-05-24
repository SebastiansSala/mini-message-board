const express = require('express');
const router = express.Router();

const date = new Date();
const currentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

let messages = [
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

router.post('/new', (req, res, next) => {
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: currentDate
  } 
  console.log(newMessage);
  messages.push(newMessage);
  res.redirect('/');
})

module.exports = router;