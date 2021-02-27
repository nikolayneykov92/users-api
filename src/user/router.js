const { Router } = require('express')
const userController = require('./controller.js')

const userRouter = Router()

userRouter.get('/:username', userController.getUser)
userRouter.post('/', userController.createUser)
userRouter.put('/:username', userController.updateUser)
userRouter.delete('/:username', userController.deleteUser)

module.exports = userRouter
