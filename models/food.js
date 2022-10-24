const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  cals: {
    type: Number,
  },
});

module.exports = mongoose.model("Foods", foodSchema);
