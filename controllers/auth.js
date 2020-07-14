const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");
const Profile = require("../models/Profile");

exports.register = asyncHandler(async (req, res, next) => {
  const { email, password, name } = req.body;

  let user = await User.findOne({ email });
  if (user) return next(new ErrorResponse("User already exists", 400));

  if (!name) return next(new ErrorResponse("Please add name", 400));

  user = await User.create({
    email,
    password,
  });

  await Profile.create({ name, user: user.id });
  sendTokenResponse(user, 200, res);
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorResponse("Please provide an email and password", 400));

  const user = await User.findOne({
    email,
  }).select("+password");
  if (!user) return next(new ErrorResponse("Invalid credentials", 401));

  const isMatch = await user.matchPassword(password);
  if (!isMatch) return next(new ErrorResponse("Invalid credentials", 401));

  sendTokenResponse(user, 200, res);
});

exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ user });
});

exports.deleteAccount = asyncHandler(async (req, res, next) => {
  await Profile.findOneAndRemove({ user: req.user.id });
  await User.findOneAndRemove({ _id: req.user.id });

  res.status(200).json({ msg: "Account deleted" });
});

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ token });
};
