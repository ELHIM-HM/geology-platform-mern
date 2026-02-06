const express = require('express')
const Book = require('../../models/book.model')
const {
  saveBook,
  updateBook,
  deleteBook,
} = require('../../controllers/Admin/library.controller')

const router = express.Router()

router.post('/save', saveBook)
router.put('/update/:id', updateBook)
router.delete('/delete/:id', deleteBook)

// Fetch all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find()
    res.json(books)
  } catch (error) {
    console.error('Error fetching books:', error)
    res
      .status(500)
      .json({ message: 'Internal Server Error' })
  }
})

module.exports = router
