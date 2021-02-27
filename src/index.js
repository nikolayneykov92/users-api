const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const userRouter = require('./user/router')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/api/users', userRouter)

app.listen(port, () => console.log(`Server listening at port ${port}...`))
