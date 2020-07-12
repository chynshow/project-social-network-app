const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  text: {
    type: String,
    required: [true, "Please add post text"],
    maxlength: 8000
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
      }
    }
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
      },
      text: {
        type: String,
        require: [true, "Please add comment text"],
        maxlength: 1000
      },
      avatar: {
        type: String
      },
      name: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = mongoose.model("Post", PostSchema);
