# Local File Storage Migration Summary

## Changes Made

### 1. **API Route Configuration** (`apiGeo/routes/collectionRouter.js`)
- Replaced `multer.memoryStorage()` with `multer.diskStorage()`
- Added automatic uploads directory creation
- Configured file naming with timestamps and random numbers to prevent conflicts
- Added file type validation (`.glb`, `.mp4`, `.webm`)
- Added 500MB file size limit

### 2. **Collection Controller** (`apiGeo/controllers/collectionController.js`)
- Removed AWS SDK dependency
- Replaced AWS S3 upload logic with local file system operations
- Updated file references from S3 URLs to local API endpoints
- Updated `deleteCollection()` to delete local files using `fs.unlinkSync()`
- Simplified file handling by using file paths instead of S3 bucket operations

### 3. **Express App Configuration** (`apiGeo/app.js`)
- Added `path` module import
- Added static file serving for uploads directory: `/api/uploads`
- Files are now accessible at: `http://localhost:3000/api/uploads/collections/<filename>`

### 4. **Environment Variables** (`apiGeo/.env`)
- Removed all AWS configuration variables
- Added comment about local file storage
- Simplified configuration

### 5. **Git Configuration** (`.gitignore`)
- Added uploads directories to ignore pattern
- Created `.gitkeep` files to maintain empty directories in git

---

## File Upload Flow (New)

```
1. User submits form with GLB and video files
   ↓
2. Multer validates file types and size
   ↓
3. Files saved to: /apiGeo/uploads/collections/
   ↓
4. Unique filenames generated (timestamp + random ID)
   ↓
5. URLs stored in MongoDB as: /api/uploads/collections/<filename>
   ↓
6. Frontend receives URLs and serves files via static endpoint
```

---

## How to Use

### Creating a Collection
```bash
POST /api/collections
Content-Type: multipart/form-data

Form Data:
- type: "Mineral"
- subtype: "Silicate"
- category: "Common"
- name: "Quartz"
- description: "A common mineral"
- formule_chimique: "SiO2"
- composition_chimique: "Silicon dioxide"
- origine_geologique: "Igneous"
- glb: [file.glb]
- video: [video.mp4]
```

Response:
```json
{
  "status": "success",
  "data": {
    "_id": "65abc123...",
    "name": "Quartz",
    "glb_url": "/api/uploads/collections/1707250123-456789.glb",
    "video_url": "/api/uploads/collections/1707250456-789012.mp4",
    ...
  }
}
```

### Accessing Uploaded Files
```
Direct URL: http://localhost:3000/api/uploads/collections/1707250123-456789.glb
Frontend Usage: Stored in MongoDB and referenced when needed
```

---

## Advantages of Local Storage

✅ **No AWS credentials needed** - Simpler setup and configuration
✅ **Lower costs** - No S3 storage fees
✅ **Faster development** - Upload directly to local filesystem
✅ **Privacy** - Files stay on your server
✅ **Offline testing** - Works without internet connection

---

## Deployment Considerations

For **production deployment**, consider:

### Option 1: Keep Local Storage
- Set up server with sufficient disk space
- Configure automatic backups of uploads folder
- Use CDN to serve static files efficiently

### Option 2: Use Object Storage
When deploying to production, you can upgrade to:
- **AWS S3** / **Google Cloud Storage** / **Azure Blob Storage**
- **DigitalOcean Spaces** (S3-compatible)
- **Wasabi** (S3-compatible, cheaper)

Migration would involve:
1. Restoring the AWS SDK code
2. Updating the controller to use S3 upload logic
3. Adding AWS credentials to environment variables
4. Migrating existing local files to cloud storage

---

## Directory Structure

```
apiGeo/
├── uploads/
│   └── collections/
│       ├── 1707250123-456789.glb
│       ├── 1707250456-789012.mp4
│       └── .gitkeep
├── controllers/
│   └── collectionController.js (updated)
├── routes/
│   └── collectionRouter.js (updated)
├── app.js (updated)
├── .env (updated)
└── server.js
```

---

## Testing File Upload

### Using cURL
```bash
curl -X POST http://localhost:3000/api/collections \
  -F "type=Mineral" \
  -F "subtype=Silicate" \
  -F "category=Common" \
  -F "name=Quartz" \
  -F "description=A beautiful mineral" \
  -F "formule_chimique=SiO2" \
  -F "composition_chimique=Silicon dioxide" \
  -F "origine_geologique=Igneous" \
  -F "glb=@path/to/file.glb" \
  -F "video=@path/to/video.mp4"
```

### Using Postman
1. Set method to `POST`
2. URL: `http://localhost:3000/api/collections`
3. Body: Select `form-data`
4. Add fields as shown above
5. Select files for `glb` and `video` fields
6. Send

---

## Troubleshooting

### Error: "Cannot find module 'aws-sdk'"
✓ **Fixed** - AWS SDK has been removed

### Error: "ENOENT: no such file or directory"
- Ensure `/apiGeo/uploads/collections/` directory exists
- The app creates it automatically on first upload

### Large files timing out
- Increase server timeout in `package.json` start script:
  ```bash
  timeout 300 npm start
  ```
- Or configure in Express:
  ```javascript
  server.setTimeout(300000); // 5 minutes
  ```

### Files not found after upload
1. Check that files are in `/apiGeo/uploads/collections/`
2. Verify URLs in MongoDB are correct format
3. Check server logs for file write errors

---

## Environment Variables Reference

| Variable | Value | Purpose |
|----------|-------|---------|
| DATABASE | MongoDB connection string | Connect to database |
| port | 3000 | Server port |
| NODE_ENV | development | Environment mode |
| JWT_SECRET | Random string | Sign JWT tokens |
| JWT_EXPIRE | 7d | Token expiration |

**Note**: No AWS variables are needed anymore!

---

**Last Updated**: February 6, 2026
**Version**: 1.0 (Local Storage)
