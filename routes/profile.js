const express = require("express");
const router = express.Router();
const {
  getCurrentProfile,
  updateProfile,
  getProfiles,
  getProfileByUserId,
  photoUpload,
} = require("../controllers/profile");
const { protect } = require("../middleware/auth");

router.get("/", protect, getCurrentProfile);
router.get("/all", protect, getProfiles);
router.get("/:userId", protect, getProfileByUserId);
router.post("/update", protect, updateProfile);
router.put("/photo", protect, photoUpload);

module.exports = router;
