const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Profile = require("../models/Profile");
const Post = require("../models/Post");

exports.getCurrentProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user.id }).populate("user");

  if (!profile) return next(new ErrorResponse("Profile not found", 404));

  res.status(200).json(profile);
});

exports.getProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find();
  if (!profiles) return next(new ErrorResponse("Profiles not found!", 404));

  res.status(200).json(profiles);
});

exports.updateProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOneAndUpdate(
    {
      user: req.user.id,
    },
    req.body.profile,
    { new: true, runValidators: true }
  );

  await Post.updateMany(
    { user: req.user.id },
    {
      $set: {
        name: req.body.profile.name,
      },
    }
  );
  await Post.updateMany(
    { "comments.user": req.user.id },
    {
      $set: {
        "comments.$[comments].name": req.body.profile.name,
      },
    },
    { arrayFilters: [{ "comments.user": req.user.id }] }
  );
  res.status(200).json(profile);
});

exports.getProfileByUserId = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({
    user: req.params.userId,
  }).populate("user");

  if (!profile) return next(new ErrorResponse("Profile not found", 404));

  res.status(200).json(profile);
});

exports.photoUpload = asyncHandler(async (req, res, next) => {
  if (!req.files) return next(new ErrorResponse(`Please upload a file`, 400));

  const file = req.files.file;

  if (!file.mimetype.startsWith("image"))
    return next(new ErrorResponse(`Please upload an image file`, 400));

  if (file.size > process.env.MAX_FILE_UPLOAD)
    return next(new ErrorResponse("Please upload an image less than 1MB", 400));

  file.name = `${req.user.id}_${path.parse(file.name).ext}`;

  await Post.updateMany(
    { user: req.user.id },
    {
      $set: {
        avatar: Buffer.from(file.data).toString("base64"),
      },
    }
  );

  await Post.updateMany(
    { "comments.user": req.user.id },
    {
      $set: {
        "comments.$[comments].avatar": Buffer.from(file.data).toString(
          "base64"
        ),
      },
    },
    { arrayFilters: [{ "comments.user": req.user.id }] }
  );

  const profile = await Profile.findOneAndUpdate(
    {
      user: req.user.id,
    },
    {
      photo: Buffer.from(file.data).toString("base64"),
    },
    { new: true }
  );

  const posts = await Post.find({ user: req.user.id });
  res.status(200).json({
    photo: profile.photo,
    posts,
  });
});
