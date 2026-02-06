// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/userController');

// Route for user login
router.post('/login', loginUser); // Changed route to '/login'

module.exports = router;
//ljsfdlk
