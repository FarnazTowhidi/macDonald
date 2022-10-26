const Foods = require("../models/food.js");

function index(req, res) {
    Foods.find({}, function (err, foods) {
      if (err) return res.send(err.message);
      res.render("foods/index.ejs", { foods, user: req.user });
    });
  }
  
  function show(req, res) {
    Foods.findById(req.params.id, function (err, food) {
      if (err) return res.send(err.message);
      res.render("foods/show.ejs", { food,user: req.user });
    });
  }
module.exports = { index,show };