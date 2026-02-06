const express = require('express')

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage })

const {
  createCollection,
  getAllCollection,
  getFilteredCollection,
  deleteCollection,
  updateCollection,
  getCollection
} = require('./../controllers/collectionController')

const router = express.Router()


router.route('/').get(getAllCollection).post(
  upload.fields([
    { name: 'glb', maxCount: 1 },
    { name: 'video', maxCount: 1 },
  ]),
  createCollection,
)

router.route('/:id').delete(deleteCollection).put(updateCollection).get(getCollection)

router.route('/filter').post(getFilteredCollection)

module.exports = router
