const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  text: String,
  comment: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comment",
    },
  ],
  like: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
