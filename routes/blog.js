const express = require("express");
const router = express.Router();

const {
  dummyLink,
  likepost,
  UnlikePost,
} = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");
const { createPost } = require("../controllers/postController");

//MAPPING CREATE
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/post/create", createPost);
router.post("/likes/like", likepost);
router.post("/likes/unlike", UnlikePost);
module.exports = router;
