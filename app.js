const config = require('./utils/config')
const express = require('express')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')
const cors = require('cors')
const app = express()

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(() => {
    console.log('Sucessfully connected to MONGODB')
})
.catch(error => {console.log(error)})

app.use(cors())
app.use(express.json())
app.use('/api/blogs',blogRouter)

module.exports = app