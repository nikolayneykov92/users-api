const userRepository = require('./repository')

const getUser = () => {}

const createUser = (user) => {
  const createdUser = userRepository.createUser(user)

  return createdUser
}

const updateUser = () => {}

const deleteUser = () => {}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
