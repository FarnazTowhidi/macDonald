function index(req, res) {
  res.render("index.ejs");
}

function index(req, res) {
  res.render("index.ejs", { user: req.user });
}

module.exports = { index };
