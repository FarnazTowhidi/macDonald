const ordersCtrl = require("../controllers/orders");
var router = require("express").Router();

router.get("/showOrder/:orderID", ordersCtrl.showOrder);
router.get("/checkout/", ordersCtrl.showAllOrders);
router.post("/Add/:id", ordersCtrl.addOrder);
router.delete("/deleteOrder/:orderID", ordersCtrl.deleteOrder);
router.post("/updateOrder/:orderID", ordersCtrl.editOrder);

module.exports = router;
