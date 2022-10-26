const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageSmall: {
    type: String,
  },
  imageBig: {
    type: String,
  },
  cals: {
    type: Number,
  },
});

module.exports = mongoose.model("food", foodSchema);
