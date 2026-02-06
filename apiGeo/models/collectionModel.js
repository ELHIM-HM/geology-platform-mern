const mongoose = require('mongoose')

// Define the base URL for your S3 bucket

const S3_BASE_URL =
  'https://elhim-3d-models.s3.eu-north-1.amazonaws.com/'

const collectionSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, 'Type is required'],
      enum: ['minerals', 'rocks', 'paleontology'],
    },
    subtype: {
      type: String,
      required: [true, 'Subtype is required'],
    },
    category: {
      type: String,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    glb_url: {
      type: String,
      required: true,
    },
    video_url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    formule_chimique: {
      type: String,
      required: [true, 'Formule Chimique is required'],
    },
    composition_chimique: {
      type: String,
      required: [true, 'Composition Chimique is required'],
    },
    origine_geologique: {
      type: String,
      required: [true, 'Origine Géologique is required'],
    },
  },
  { timestamps: true },
)



const Collection = mongoose.model(
  'Collection',
  collectionSchema,
)

module.exports = Collection
