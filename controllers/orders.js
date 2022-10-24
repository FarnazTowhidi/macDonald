const Foods = require("../models/food.js");
const Orders = require("../models/order.js");

function index(req, res) {
  Foods.find({}, function (err, foods) {
    if (err) return res.send(err.message);
    res.render("orders/index.ejs", { foods });
  });
}

function addOrder(req, res) {}

function show(req, res) {
  Foods.findById(req.params.id, function (err, food) {
    console.log(food);
    if (err) return res.send(err.message);
    res.render("orders/show.ejs", { food });
  });
}

module.exports = { index, addOrder, show };
