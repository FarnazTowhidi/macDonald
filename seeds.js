require("./config/database");
const Foods = require("./models/food");
const data = require("./data");


Foods.deleteMany({}).then(function (result) {
  return Foods.create(data.foods);
});
