const Comment = require("../models/Comment.model");
module.exports.commentControllers = {
  createComment: async (req, res) => {
    try {
      const data = await Comment.create({
        text: req.body.text,
        user: req.body.user,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  patchComment: async (req, res) => {
    try {
      const data = await Comment.findByIdAndUpdate(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deleteComment: async (req, res) => {
    try {
      const data = await Comment.findByIdAndRemove(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
};
