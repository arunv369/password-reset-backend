const express = require("express");
const {
  forgotPassword,
  resetPassword,
  signUp,
} = require("../controller/PasswordController");

const router = express.Router();

// Forgot Password Route
router.post("/forgot-password", forgotPassword);

// Reset Password Route
router.post("/reset-password/:token", resetPassword);
router.post("/signup", signUp);

module.exports = router;
