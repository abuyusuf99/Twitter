const {Router} = require('express')
const {commentControllers} = require('../controllers/comment.controllers')
router = Router()


router.post('/Comments',commentControllers.createComment)

module.exports = router