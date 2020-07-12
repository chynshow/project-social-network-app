const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Post = require("../models/Post");
const Profile = require("../models/Profile");

exports.addPost = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user.id });
  if (!profile) return next(new ErrorResponse("Profile not found", 404));

  const post = await Post.create({
    user: req.user.id,
    name: profile.name,
    text: req.body.text,
    avatar: profile.photo
  });
  res.status(200).json({ post });
});

exports.getPostsById = asyncHandler(async (req, res, next) => {
  const posts = await Post.find({ user: req.params.user_id });

  if (!posts) return next(new ErrorResponse("Posts not found", 404));

  res.status(200).json({ count: posts.length, posts });
});

exports.getPostsForCurrentUser = asyncHandler(async (req, res, next) => {
  const posts = await Post.find({ user: req.user.id });

  if (!posts) return next(new ErrorResponse("Posts not found", 404));

  res.status(200).json({ count: posts.length, posts: posts.reverse() });
});

exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.post_id);

  if (!post) return next(new ErrorResponse("Post not found", 404));
  await post.remove();

  const posts = await Post.find({ user: req.user.id });

  res.status(200).json({ posts });
});

exports.updateLike = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.post_id);
  if (post.likes.filter(l => l.user.toString() === req.user.id).length > 0) {
    const removeIndex = post.likes
      .map(l => l.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    return res.status(200).json(post.likes);
  }

  post.likes = [
    {
      user: req.user.id
    },
    ...post.likes
  ];

  await post.save();

  res.status(200).json(post.likes);
});

exports.addComment = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.post_id);

  if (!post) return next(new ErrorResponse("Post not found", 404));
  if (req.body.comment === "")
    return next(new ErrorResponse("Comment is not can be empty", 401));

  const profile = await Profile.findOne({ user: req.user.id });

  post.comments = [
    {
      user: req.user.id,
      text: req.body.comment,
      name: profile.name,
      avatar: profile.photo
    },
    ...post.comments
  ];

  await post.save();

  res.status(200).json(post.comments);
});

exports.deleteComment = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.post_id);

  const comment = post.comments.find(c => c.id === req.params.comment_id);
  if (!comment) return next(new ErrorResponse("Comment not found", 404));

  if (comment.user.toString() !== req.user.id)
    return next(new ErrorResponse("User not authorized", 401));

  const removeIndex = post.comments
    .map(c => c._id.toString())
    .indexOf(comment._id);

  post.comments.splice(removeIndex, 1);

  await post.save();

  res.status(200).json(post.comments);
});
