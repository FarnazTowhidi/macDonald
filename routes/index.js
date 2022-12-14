const IndCtrl = require("../controllers/index");
var router = require("express").Router();
const passport = require("passport");

// The root route renders our only view
// router.get("/", function (req, res) {
//   res.redirect("/students");
// });
router.get("/", IndCtrl.index);

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// OAuth logout route
router.get("/logout", function (req, res,next) {
  req.logout(function (err){next(err)});
  res.redirect("/");
});

module.exports = router;
