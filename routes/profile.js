const express = require("express");
const router = express.Router();
const {
  getCurrentProfile,
  updateProfile,
  getProfiles,
  getProfileByUserId,
  addMainInfo,
  addEducation,
  addExperience,
  delEducation,
  delExperience,
  photoUpload,
  updateContacts
} = require("../controllers/profile");
const { protect } = require("../middleware/auth");

router.get("/", protect, getCurrentProfile);
router.get("/all", protect, getProfiles);
router.get("/:userId", protect, getProfileByUserId);
router.post("/update", protect, updateProfile);
router.put("/main", protect, addMainInfo);
router.put("/education", protect, addEducation);
router.delete("/education/:id", protect, delEducation);
router.put("/experience", protect, addExperience);
router.put("/contacts", protect, updateContacts);
router.delete("/experience/:id", protect, delExperience);
router.put("/photo", protect, photoUpload);

module.exports = router;
