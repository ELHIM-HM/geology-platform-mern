const path = require("path");
const fs = require("fs");
const Collection = require("./../models/collectionModel");

const UPLOADS_BASE_PATH = path.join(__dirname, "../uploads/collections");
const UPLOADS_BASE_URL = "/api/uploads/collections";

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
    } = req.body;

    // Validate file presence
    if (!req.files.glb || !req.files.video) {
      return res.status(400).json({
        status: "error",
        message: "GLB file and video file are required.",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        status: "error",
        message: "GLB file and video file are required.",
      });
    }

    // Group files by field name
    const filesByField = {};
    req.files.forEach((file) => {
      if (!filesByField[file.fieldname]) {
        filesByField[file.fieldname] = [];
      }
      filesByField[file.fieldname].push(file);
    });

    const glbFile = filesByField.glb ? filesByField.glb[0] : null;
    const videoFile = filesByField.video ? filesByField.video[0] : null;

    if (!glbFile || !videoFile) {
      return res.status(400).json({
        status: "error",
        message: "Both GLB file and video file are required.",
      });
    }

    const glb_url = `${UPLOADS_BASE_URL}/${glbFile.filename}`;
    const video_url = `${UPLOADS_BASE_URL}/${videoFile.filename}`;

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
    });
    res.status(201).json({
      status: "seccuss",
      data: collection,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.getAllCollection = async (req, res) => {
  try {
    const collections = await Collection.find({});
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.getFilteredCollection = async (req, res) => {
  try {
    const { selectedType, selectedSubType, selectedCategory } = req.body;
    const filter = {};
    if (selectedType) {
      filter.type = selectedType;
    }
    if (selectedSubType) {
      filter.subtype = selectedSubType;
    }
    if (selectedCategory) {
      filter.category = selectedCategory;
    }

    const filteredCollections = await Collection.find(filter);

    res.status(200).json(filteredCollections);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.deleteCollection = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the collection in MongoDB
    const collection = await Collection.findById(id);
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    // Delete GLB file if exists
    if (collection.glb_url) {
      const glbFileName = collection.glb_url.split("/").pop();
      const glbFilePath = path.join(UPLOADS_BASE_PATH, glbFileName);
      if (fs.existsSync(glbFilePath)) {
        fs.unlinkSync(glbFilePath);
      }
    }

    // Delete video file if exists
    if (collection.video_url) {
      const videoFileName = collection.video_url.split("/").pop();
      const videoFilePath = path.join(UPLOADS_BASE_PATH, videoFileName);
      if (fs.existsSync(videoFilePath)) {
        fs.unlinkSync(videoFilePath);
      }
    }

    // Delete the collection from MongoDB
    await Collection.findByIdAndDelete(id);

    res.status(200).json({
      message: "Collection and associated files deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.updateCollection = async (req, res) => {
  const { id } = req.params;
  const updateFields = req.body; // Fields to update

  console.log(updateFields);

  try {
    // Find the collection in MongoDB and update it
    const updatedCollection = await Collection.findByIdAndUpdate(
      id,
      updateFields,
      {
        new: true,
      },
    );

    if (!updatedCollection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    res.status(200).json({
      message: "Collection updated successfully",
      collection: updatedCollection,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
};

exports.getCollection = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the collection in MongoDB
    const collection = await Collection.findById(id);

    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    res.status(200).json(collection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
};
