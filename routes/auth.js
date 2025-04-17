const express = require("express");
const {
  forgotPassword,
  resetPassword,
  signUp,
  login,
} = require("../controller/PasswordController");

const router = express.Router();

//signup
router.post("/signup", signUp);

//login
router.post("/login", login);

// Forgot Password Route
router.post("/forgot-password", forgotPassword);

// Reset Password Route
router.post("/reset-password/:token", resetPassword);

module.exports = router;
