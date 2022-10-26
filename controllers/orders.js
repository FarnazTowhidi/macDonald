const Orders = require("../models/order.js");


function addOrder(req, res) {
  const food = {
    food: req.params.id,
    Quantity: req.body.Quantity,
  };
  const order = new Orders();
  order.date = Date.now();

  // order.userId = parseInt(req.user)
  
  order.userId = parseInt(req.session.passport.user)
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
    res.render("orders/showOrder.ejs", { order,user: req.user });
  });
}

function showAllOrders(req, res) {
  Orders.find({userId:parseInt(req.session.passport.user)}).
  populate('foods.food')
  .exec(function (err, order) {
    if (err) return res.send(err.message);
    res.render("orders/checkout.ejs", { orders });
    
  });
}


module.exports = {  addOrder, showOrder ,showAllOrders};
