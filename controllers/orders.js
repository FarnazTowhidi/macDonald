const Foods = require("../models/food.js");
const Orders = require("../models/order.js");


function addOrder(req, res) {
  console.log ("test" + req.session.passport)
  const food = {
    food: req.params.id,
    Quantity: req.body.Quantity,
  };
  const order = new Orders();
  order.date = Date.now();
  order.userId = parseInt(req.user._id)
  order.foods.push(food);
  const orderID = order._id;
  order.save(function (err) {
    if (err) return console.log(err.message);
    res.redirect(`/orders/showOrder/${orderID}`);
  });
}


function showOrder(req, res) {
  Orders.findById(req.params.orderID).
  populate('foods.food')
  .exec(function (err, order) {
    if (err) return res.send(err.message);
    // Foods.findOne({'-id':});
    res.render("orders/showOrder.ejs", { order,user: req.user });
  });
}

module.exports = {  addOrder, showOrder };
