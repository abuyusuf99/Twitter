const User = require('../models/User.model')
module.exports.userControllers ={
    createUser: async (req, res) => {
        try {
          const data = await User.create({
            nickname: req.body.nickname,
            save : req.body.save
          });
          res.json(data);
        } catch (error) {
          res.json(error);
        }
      },
      patchUser: async (req, res) => {
        try {
          const data = await User.findByIdAndUpdate(req.params.id, req.body);
          res.json(data);
        } catch (error) {
          res.json(error);
        }
      },
      deleteUser: async (req, res) => {
        try {
          const data = await User.findByIdAndRemove(req.params.id);
          res.json(data);
        } catch (error) {
          res.json(error);
        }
      },
      getUsers: async(req,res)=>{
        try{
            const data = await User.find({}).populate("save")
            res.json(data)
        }catch (error) {
            res.json(error);
          }
      },
      getUserid: async(req,res)=>{
        try{
            const data = await User.findById(req.params.id).populate("save")
            res.json(data)
        }catch (error) {
            res.json(error);
          }
      },
}