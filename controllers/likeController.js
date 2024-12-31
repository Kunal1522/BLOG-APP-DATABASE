const Post = require("../models/postModel");
const Like = require("../models/likeModel");
exports.likepost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        likes: savedLike._id,
      },
      { new: true }
    );
  } catch (error) {
    return res.status(400).json({
      error: "ERROR WHILE MAKING WHILE LIKING POST",
    });
  }
};
exports.UnlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    // Find and delete the like collection
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    // Update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while unliking post",
    });
  }
};
exports.dummyLink = (req, res) => {
  res.send("This is Dummy link");
};
