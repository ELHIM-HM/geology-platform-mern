const express = require('express')

const {getEvents} = require('./../controllers/eventController')

const router = express.Router()


router.route('/').get(getEvents)




module.exports = router


