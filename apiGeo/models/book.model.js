const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  deposit: {
    type: Date,
    required: true,
    default: Date.now,
  },
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
