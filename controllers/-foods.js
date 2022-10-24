const Foods = require("../models/food.js");

function index(req, res) {
  res.render("/index.ejs");
}

module.exports = { index };
