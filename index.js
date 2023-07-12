const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(require('./routes/post.route'))
app.use(require('./routes/user.route'))
app.use(require('./routes/comment.route'))

mongoose.connect("mongodb+srv://Muslim:***Muslim95@cluster0.b4yowf9.mongodb.net/Twitter")
.then(()=>{console.log('Сервер MangoDB подключен');})
.catch(()=> {console.log("Ошибка подключения к MangoDB");})

app.listen(3000,()=>{
    console.log('Сервер подключен');
})