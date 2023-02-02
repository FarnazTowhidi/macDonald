const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: {
    type: Date,
  },
  userId: Number,
  foods: [
    {
      food: { type: Schema.Types.ObjectId, ref: "food" },
      Quantity: Number,
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
