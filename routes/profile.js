const express = require("express");
const router = express.Router();
const {
  getCurrentProfile,
  updateProfile,
  getProfiles,
  getProfileByUserId,
  photoUpload,
  updateContacts,
} = require("../controllers/profile");
const { protect } = require("../middleware/auth");

router.get("/", protect, getCurrentProfile);
router.get("/all", protect, getProfiles);
router.get("/:userId", protect, getProfileByUserId);
router.post("/update", protect, updateProfile);
router.put("/contacts", protect, updateContacts);
router.put("/photo", protect, photoUpload);

module.exports = router;
