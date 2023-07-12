const {Router} = require('express')
const {userControllers} = require('../controllers/user.controllers')
router = Router()


router.post('/Users',userControllers.createUser)
router.get("/Users/",userControllers.getUsers)
router.patch('/User/:id',userControllers.patchUser)
router.get('/User/:id',userControllers.getUserid)

module.exports = router