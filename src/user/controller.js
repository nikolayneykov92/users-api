const userService = require('./service.js')

const getUser = (req, res) => {
  res.json({ message: 'get user' })
}

const createUser = (req, res) => {
  const createdUser = userService.createUser(req.body)
  console.log(createdUser)
  res.json({ message: 'hi' })
}

const updateUser = (req, res) => {
  res.json({ message: 'update user' })
}

const deleteUser = (req, res) => {
  res.json({ message: 'delete user' })
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
