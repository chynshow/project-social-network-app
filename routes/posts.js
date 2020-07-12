const express = require("express");
const router = express.Router();
const {
  getPostsForCurrentUser,
  addPost,
  getPostsById,
  deletePost,
  addComment,
  updateLike,
  deleteComment
} = require("../controllers/posts");
const { protect } = require("../middleware/auth");

router
  .route("/")
  .post(protect, addPost)
  .get(protect, getPostsForCurrentUser);

router.route("/:user_id").get(protect, getPostsById);
router.delete("/:post_id", protect, deletePost);

router.put("/like/:post_id", protect, updateLike);
router.put("/comment/:post_id", protect, addComment);
router.delete("/comment/:post_id/:comment_id", protect, deleteComment);

module.exports = router;
