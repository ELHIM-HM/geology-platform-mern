const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "../uploads/collections");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure local file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 500 * 1024 * 1024 }, // 500MB limit
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if ([".glb", ".mp4", ".webm"].includes(ext)) {
      cb(null, true);
    } else {
      cb(
        new Error(`Invalid file type. Only .glb and video files are allowed`),
        false,
      );
    }
  },
});

const {
  createCollection,
  getAllCollection,
  getFilteredCollection,
  deleteCollection,
  updateCollection,
  getCollection,
} = require("./../controllers/collectionController");

const router = express.Router();

router
  .route("/")
  .get(getAllCollection)
  .post(
    upload.fields([
      { name: "glb", maxCount: 1 },
      { name: "video", maxCount: 1 },
    ]),
    createCollection,
  );

router
  .route("/:id")
  .delete(deleteCollection)
  .put(updateCollection)
  .get(getCollection);

router.route("/filter").post(getFilteredCollection);

module.exports = router;
