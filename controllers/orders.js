const Foods = require("../models/food.js");
const Orders = require("../models/order.js");

function index(req, res) {
  Foods.find({}, function (err, foods) {
    if (err) return res.send(err.message);
    res.render("orders/index.ejs", { foods, user: req.user });
  });
}

function addOrder(req, res) {
  const food = {
    food: req.params.id,
    Quantity: req.body.Quantity,
  };
  const order = new Orders();
  order.date = Date.now();

  order.foods.push(food);
  const orderID = order._id;
  order.save(function (err) {
    if (err) return console.log(err.message);
    res.redirect(`/orders/showOrder/${orderID}`);
  });
}

function show(req, res) {
  Foods.findById(req.params.id, function (err, food) {
    if (err) return res.send(err.message);
    res.render("orders/show.ejs", { food });
  });
}

function showOrder(req, res) {
  Orders.findById(req.params.orderID, function (err, order) {
    if (err) return res.send(err.message);
    // Foods.findOne({'-id':});
    res.render("orders/showOrder.ejs", { order });
  });
}

module.exports = { index, addOrder, show, showOrder };
