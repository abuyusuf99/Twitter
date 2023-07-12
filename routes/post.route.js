const {Router} = require('express')
const {postControllers} = require('../controllers/post.controllers')
router = Router()


router.post('/Posts',postControllers.createPost)
router.patch('/Posts/:id',postControllers.patchPost)
router.get('/Posts', postControllers.getPosts)

module.exports = router