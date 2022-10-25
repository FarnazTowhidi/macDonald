const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const orderSchema = new Schema({
//   date: {
//     type: Date,
//   },
//   foods: [
//     {
//       foodID: Schema.Types.ObjectId,
//       Quantity: Number,
//     },
//   ],
// });

const orderSchema = new Schema({
  date: {
    type: Date,
  },
  foods: [
    {
      food: { type: Schema.Types.ObjectId, ref: "food" },
      Quantity: Number,
    },
  ],
});

module.exports = mongoose.model("Orders", orderSchema);
