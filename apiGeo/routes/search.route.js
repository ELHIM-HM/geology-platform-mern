// backend/routes/search.route.js

const express = require('express')
const router = express.Router()
const Book = require('../models/book.model') // Assuming you have a Book model

// Route to handle search requests
router.get('/search', async (req, res) => {
  const query = req.query.q // Get the search query from the request query string
  try {
    const results = await Book.find({
      $text: { $search: query },
    }) // Perform a text search on your Book collection
    res.json(results)
  } catch (error) {
    console.error('Error searching books:', error)
    res
      .status(500)
      .json({
        message: 'An error occurred while searching books.',
      })
  }
})

module.exports = router
