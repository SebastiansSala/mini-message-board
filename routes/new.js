const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("new", {title: "new"});
});
module.exports = router;
