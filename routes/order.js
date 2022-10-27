const ordersCtrl = require("../controllers/orders");
var router = require("express").Router();
// const passport = require("passport");

router.get("/showOrder/:orderID", ordersCtrl.showOrder);
router.get("/checkout/", ordersCtrl.showAllOrders);
router.post("/Add/:id", ordersCtrl.addOrder);
router.delete("/deleteOrder/:orderID", ordersCtrl.deleteOrder);
router.put("/updateOrder/:orderID", ordersCtrl.editOrder);

module.exports = router;
