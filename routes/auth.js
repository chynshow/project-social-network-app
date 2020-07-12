const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe,
  deleteAccount,
  updateEmail,
  updatePassword
} = require("../controllers/auth");
const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.put("/updateemail", protect, updateEmail);
router.put("/updatepassword", protect, updatePassword);
router.delete("/", protect, deleteAccount);

module.exports = router;
