const express = require("express");
const passport = require("passport");
const router = express.Router();

//? register and login handle for google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

//? google auth callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  })
);

module.exports = router;
