const blogRouting = require('express').Router()
const Blog = require('../models/blog')

blogRouting.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })

blogRouting.post('/', (request, response) => {
    const body = request.body
    console.log(body)

  const blog = new Blog({
      title: body.title,
      author:body.author,
      url:body.url,
      likes:body.likes
  })

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = blogRouting