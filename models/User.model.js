const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    nickname : String,
    save:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref : "Post",
        
    }]
})
const User = mongoose.model('User', userSchema)
module.exports = User