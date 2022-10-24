require("./config/database");
const Foods = require("./models/food");
const data = require("./data");

// const p1 = Foods.deleteMany({});

// Promise.all([p1]).then(function (results) {
//   console.log(results);
//   return Foods.create(data.foods);
// });

Foods.deleteMany({}).then(function (result) {
  console.log(result);
  return Foods.create(data.foods);
});
