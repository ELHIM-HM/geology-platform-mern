const AWS = require('aws-sdk')

const Collection = require('./../models/collectionModel')

// Configure AWS SDK
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

const S3_BASE_URL =
  'https://elhim-3d-models.s3.eu-north-1.amazonaws.com/'

exports.createCollection = async (req, res) => {
  try {
    const {
      type,
      subtype,
      category,
      name,
      description,
      formule_chimique,
      composition_chimique,
      origine_geologique,
    } = req.body

    // Validate file presence
    if (!req.files.glb || !req.files.video) {
      return res.status(400).json({
        status: 'error',
        message: 'GLB file and video file are required.',
      })
    }

    const glbFile = req.files.glb[0]
    const videoFile = req.files.video[0]

    // validate file types

    // if (glbFile.mimetype !== 'model/gltf-binary') {
    //   return res.status(400).json({
    //     status: 'error',
    //     message: 'Invalid GLB file type',
    //   })
    // }

    // if (videoFile.mimetype !== 'video/mp4') {
    //   return res.status(400).json({
    //     status: 'error',
    //     message: 'Invalid video file type',
    //   })
    // }

    const baseType = type.toLowerCase().replace(/\s+/g, '-')
    const baseSubtype = subtype
      .toLowerCase()
      .replace(/\s+/g, '-')
    const baseCategory = category
      ?.toLowerCase()
      .replace(/\s+/g, '-')
    const baseName = name.toLowerCase().replace(/\s+/g, '-')

    const folderPath = `${baseType}/${baseSubtype}/${baseCategory}/${baseName}/`
    const glbFileName = `${folderPath}${baseName}.glb`
    const videoFileName = `${folderPath}${baseName}_demo.mp4`

    // Upload .glb file to S3
    const glbParams = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: glbFileName,
      Body: glbFile.buffer,
      ContentType: glbFile.mimetype,
    }

    // Upload video file to S3
    const videoParams = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: videoFileName,
      Body: videoFile.buffer,
      ContentType: videoFile.mimetype,
    }

    const uploadGlb = s3.upload(glbParams).promise()
    const uploadVideo = s3.upload(videoParams).promise()

    await Promise.all([uploadGlb, uploadVideo])

    const glb_url = `${S3_BASE_URL}${glbFileName}`
    const video_url = `${S3_BASE_URL}${videoFileName}`

    const collection = await Collection.create({
      type,
      subtype,
      category,
      name,
      description,
      formule_chimique,
      composition_chimique,
      origine_geologique,
      glb_url,
      video_url,
    })
    res.status(201).json({
      status: 'seccuss',
      data: collection,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.getAllCollection = async (req, res) => {
  try {
    const collections = await Collection.find({})
    res.status(200).json(collections)
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.getFilteredCollection = async (req, res) => {
  try {
    const {
      selectedType,
      selectedSubType,
      selectedCategory,
    } = req.body
    const filter = {}
    if (selectedType) {
      filter.type = selectedType
    }
    if (selectedSubType) {
      filter.subtype = selectedSubType
    }
    if (selectedCategory) {
      filter.category = selectedCategory
    }

    const filteredCollections = await Collection.find(
      filter,
    )

    res.status(200).json(filteredCollections)
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.deleteCollection = async (req, res) => {
  try {
    const { id } = req.params

    // Find the collection in MongoDB
    const collection = await Collection.findById(id)
    if (!collection) {
      return res
        .status(404)
        .json({ message: 'Collection not found' })
    }

    // Extract folder URL from the video URL
    const folderUrl = new URL(collection.video_url)
    const folderKey = folderUrl.pathname
      .split('/')
      .slice(1, -1) // Exclude the first empty string element and remove the last element (object name)
      .join('/')

    console.log(folderKey)

    // Delete the objects in the folder
    const listParams = {
      Bucket: 'elhim-3d-models',
      Prefix: folderKey,
    }

    const listedObjects = await s3
      .listObjectsV2(listParams)
      .promise()
    const objectsToDelete = listedObjects.Contents.map(
      ({ Key }) => ({ Key }),
    )

    if (objectsToDelete.length > 0) {
      const deleteObjectsParams = {
        Bucket: 'elhim-3d-models',
        Delete: {
          Objects: objectsToDelete,
          Quiet: false,
        },
      }

      await s3.deleteObjects(deleteObjectsParams).promise()
    }

    // Delete the folder itself
    const deleteFolderParams = {
      Bucket: 'elhim-3d-models',
      Delete: {
        Objects: [{ Key: folderKey + '/' }], // Specify the folder key with a trailing slash
        Quiet: false,
      },
    }

    await s3.deleteObjects(deleteFolderParams).promise()

    // Delete the collection from MongoDB
    await Collection.findByIdAndDelete(id)

    res.status(200).json({
      message:
        'Collection and associated folder deleted successfully',
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    })
  }
}

exports.updateCollection = async (req, res) => {
  const { id } = req.params
  const updateFields = req.body // Fields to update

  console.log(updateFields)

  try {
    // Find the collection in MongoDB and update it
    const updatedCollection =
      await Collection.findByIdAndUpdate(id, updateFields, {
        new: true,
      })

    if (!updatedCollection) {
      return res
        .status(404)
        .json({ message: 'Collection not found' })
    }

    res.status(200).json({
      message: 'Collection updated successfully',
      collection: updatedCollection,
    })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'An error occurred', error })
  }
}

exports.getCollection = async (req, res) => {
  const { id } = req.params

  try {
    // Find the collection in MongoDB
    const collection = await Collection.findById(id)

    if (!collection) {
      return res
        .status(404)
        .json({ message: 'Collection not found' })
    }

    res.status(200).json(collection)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'An error occurred', error })
  }
}
