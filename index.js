const http = require('http')
const express = require('express')
const app = require('./app')
const mongoose = require('mongoose')
const config = require('./utils/config')
const Blog = require('./models/blog')

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})