const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const users = require("./users.js");
const User = users.model;

const photos = require("./photos.js");
const Photo = photos.model;

const commentSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  photo:{
    type: mongoose.Schema.ObjectId,
    ref: 'Photo',
  },
  photoID: String,
  comment: String,
  photoUser: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const Comment = mongoose.model('Comment', commentSchema);

router.post("/", async (req, res) => {
  // check parameters
  const comment = new Comment({
    photoUser: req.body.photoUser,
    photoID: req.body.photoID,
    comment: req.body.addedComment,
  });
  try {
    await comment.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get("/all", async (req, res) => {
  try {
    let comments = await Comment.find().sort({
      created: -1
    }).populate('user');
    return res.send(comments);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  model: Comment,
  routes: router,
}
