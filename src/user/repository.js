const Datastore = require('nedb')
const path = require('path')

const userDatastore = new Datastore({ filename: path.resolve(__dirname, 'users.db'), autoload: true })

const createUser = (user) => {
  const createdUser = userDatastore.insert(user)
  console.log(userDatastore)

  return createdUser
}

module.exports = {
  createUser,
}
