const Post = require("../models/Post.model");
module.exports.postControllers = {
  createPost: async (req, res) => {
    try {
      const data = await Post.create({
        user: req.body.user,
        text: req.body.text,
        comment: req.body.comment,
        like: req.body.like,
      })
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getPosts: async(req,res)=>{
    try{
        const data = await Post.find({}).populate("comment").populate("like").populate("user")
        res.json(data)
    }catch (error) {
        res.json(error);
      }
  },
  patchPost: async (req, res) => {
    try {
      const data = await Post.findByIdAndUpdate(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deletePost: async (req, res) => {
    try {
      const data = await Post.findByIdAndRemove(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
};
