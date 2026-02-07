# 🌍 Geology Platform

> *An interactive digital experience for exploring Earth's geological wonders through cutting-edge web technologies.*

**A modern MERN stack platform** that brings geological collections to life with 3D visualization, interactive maps, and comprehensive content management. Perfect for museums, educational institutions, and geology enthusiasts.

---

## ✨ What Makes It Special

🎨 **Immersive 3D Experience** - Explore geological specimens with interactive 3D models  
🗺️ **Geographic Intelligence** - Visualize geological data on interactive maps  
⚡ **Lightning Fast** - Built with modern tools for optimal performance  
🔒 **Enterprise Ready** - Robust authentication and admin controls  
📱 **Responsive Design** - Seamless experience across all devices  
💾 **Flexible Storage** - Local file system with easy cloud migration path

---

## 🚀 Quick Start

Get up and running in under 5 minutes:

```bash
# Clone the repository
git clone https://github.com/ELHIM-HM/geology-platform-mern.git
cd geology-platform-mern

# Install dependencies (all services)
npm install --prefix apiGeo && npm install --prefix admin && npm install --prefix geoFrontEnd

# Configure environment (see Configuration section)
# Then start everything with one command:
.\start-all.ps1  # Windows PowerShell
./start-all.sh   # Linux/macOS
```

**Access your platform:**
- 🌐 Public Site: `http://localhost:5174`
- 🛠️ Admin Dashboard: `http://localhost:5173`
- 🔌 API: `http://localhost:3000`

---

## 🎯 Core Features

### For Visitors
- Browse curated geological collections with stunning 3D models
- Explore interactive maps showing geological locations
- Stay updated with events and announcements
- Responsive design for mobile and desktop

### For Administrators
- Intuitive dashboard with analytics and insights
- Complete content management (collections, events, announcements)
- User management and access control
- Real-time data visualization with charts

### Technical Highlights
- **Modern Tech Stack**: React 18, Node.js, MongoDB, Express
- **Performance Optimized**: Vite bundler, React Query caching
- **Developer Friendly**: Hot reload, ESLint, modular architecture
- **Production Ready**: JWT auth, CORS handling, error management

---

## 📋 What's Inside

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Frontend** | React + Vite + Tailwind | Public-facing website |
| **Admin Panel** | React + Material-UI | Content management |
| **Backend API** | Node.js + Express | RESTful services |
| **Database** | MongoDB + Mongoose | Data persistence |

<details>
<summary><b>📦 Full Tech Stack Details</b></summary>

**Frontend Technologies:**
- React 18.2, Vite 5.2, React Router v6
- Tailwind CSS, Mantine UI, Material-UI
- TanStack React Query, Formik, Yup
- Three.js (3D), Leaflet (Maps)

**Backend Technologies:**
- Node.js, Express.js
- MongoDB, Mongoose ODM
- JWT, bcrypt, Multer
- CORS, Morgan, Dotenv

</details>

---

## ⚙️ Configuration

<details>
<summary><b>🔧 Backend Setup (apiGeo/.env)</b></summary>

```env
# Database
DATABASE=mongodb://127.0.0.1:27017/geologydb  # Local
# DATABASE=mongodb+srv://user:pass@cluster.mongodb.net/db  # Atlas

# Server
port=3000
NODE_ENV=development

# Security
JWT_SECRET=your_secret_key_change_in_production
JWT_EXPIRE=7d
```

</details>

<details>
<summary><b>🎨 Frontend Setup (geoFrontEnd/.env.local)</b></summary>

```env
VITE_API_URL=http://localhost:3000/api
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your_client_id
```

</details>

<details>
<summary><b>🛠️ Admin Setup (admin/.env.local)</b></summary>

```env
VITE_API_URL=http://localhost:3000/api
```

</details>

---

## 📚 Documentation

<details>
<summary><b>🗂️ Project Structure</b></summary>

```
geology-platform-mern/
├── geoFrontEnd/       # Public website (React + Vite)
├── admin/             # Admin dashboard (React + MUI)
├── apiGeo/            # Backend API (Express + MongoDB)
│   ├── controllers/   # Business logic
│   ├── models/        # Database schemas
│   ├── routes/        # API endpoints
│   └── uploads/       # File storage
└── start-all.*        # Quick start scripts
```

</details>

<details>
<summary><b>🔌 API Reference</b></summary>

**Authentication**
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

**Collections**
- `GET /api/collections` - List all collections
- `POST /api/collections` - Create collection (Admin)
- `PUT /api/collections/:id` - Update collection (Admin)
- `DELETE /api/collections/:id` - Delete collection (Admin)

**Events & Announcements**
- `GET /api/events` - List events
- `GET /api/announcements` - List announcements

*Full API documentation available in the detailed docs section.*

</details>

<details>
<summary><b>🐛 Troubleshooting Guide</b></summary>

**MongoDB Connection Failed**
```bash
# Check MongoDB is running
mongod

# Verify connection string in .env
# For Atlas: Whitelist your IP in Network Access
```

**Port Already in Use**
```powershell
# Find and kill process (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**CORS Errors**
- Ensure CORS is enabled in `apiGeo/app.js`
- Verify API URL matches in frontend `.env.local`

**Build Issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

</details>

---

## 🤝 Contributing

We welcome contributions! Whether it's bug fixes, new features, or documentation improvements.

```bash
# Fork the repo, create a branch, make changes
git checkout -b feature/amazing-feature
git commit -m "feat: add amazing feature"
git push origin feature/amazing-feature
# Then open a Pull Request
```



## 📄 License

ISC License - feel free to use for your projects!

---

<div align="center">

**Built with ❤️ using React, Node.js, and MongoDB**

⭐ Star this repo if you find it helpful!

*Version 1.0.0 | Last Updated: February 2026*

</div>

---

## 🎯 Project Overview

The Geology Platform is a three-tier web application designed to:
- **Display geological information** to end users through an interactive frontend
- **Manage geological collections, events, and announcements** via a secure admin dashboard
- **Provide robust API services** for data management and user authentication

### Key Components:
1. **geoFrontEnd** - Public-facing user interface (Vite + React)
2. **admin** - Admin dashboard for content management (Vite + React)
3. **apiGeo** - Backend API server (Express + MongoDB)

---

## ✨ Features

### Frontend (geoFrontEnd)
- Interactive geological data exploration
- Leaflet-based maps with geospatial visualization
- 3D model viewing capabilities
- User authentication with Auth0
- Responsive design with Tailwind CSS & Mantine UI
- Event and collection browsing

### Admin Dashboard (admin)
- Complete content management system
- User management and analytics
- Collection, event, and announcement management
- Real-time data tables with MUI DataTables
- Dashboard with recharts visualization
- Authentication and authorization

### Backend API (apiGeo)
- RESTful API with Express
- MongoDB database integration
- User authentication with JWT and bcrypt
- **Local file storage** for collections (GLB models & videos)
- Complete CRUD operations for collections, events, announcements
- Admin-specific routes and controllers

---

## 🛠 Tech Stack

### Frontend
- **React 18.2** - UI library
- **Vite 5.2** - Build tool
- **React Router v6** - Navigation
- **TanStack React Query** - Data fetching & caching
- **Tailwind CSS** - Styling
- **Mantine** - Component library
- **Three.js** - 3D rendering
- **Leaflet** - Mapping library
- **Formik & Yup** - Form management & validation

### Admin Dashboard
- **React 18.2** - UI library
- **Vite 5.2** - Build tool
- **Material-UI (MUI)** - Component library
- **MUI DataTables** - Advanced data tables
- **React Bootstrap** - UI components
- **Recharts** - Data visualization
- **Formik & Yup** - Form management

### Backend
- **Node.js + Express** - Server framework
- **MongoDB + Mongoose** - Database & ODM
- **bcrypt** - Password hashing
- **JWT** - Authentication
- **Multer** - File upload handling (local storage)
- **Cors** - Cross-origin requests
- **Morgan** - HTTP logging
- **Dotenv** - Environment variables

---

## � File Storage

### Local File System Storage ⭐

This project uses **local file system storage** instead of AWS S3. This approach provides:

✅ **No AWS Costs** - Free file hosting on your server
✅ **Easy Setup** - No credentials or configuration needed
✅ **Fast Development** - Upload files directly without cloud latency
✅ **Full Control** - Your files stay on your server
✅ **Offline Testing** - Works without internet connection

### How File Storage Works

```
User uploads GLB model & video
        ↓
Multer validates file type & size
        ↓
Files saved to: /apiGeo/uploads/collections/
        ↓
Unique filename generated (timestamp + random ID)
        ↓
URL stored in MongoDB: /api/uploads/collections/<filename>
        ↓
Frontend receives URL and displays file
```

### File Upload Details

**Upload Location:** `/apiGeo/uploads/collections/`

**Access URL:** `http://localhost:3000/api/uploads/collections/<filename>`

**File Types:** `.glb`, `.mp4`, `.webm`

**Max File Size:** 500MB per file

### Example Request

```bash
POST /api/collections
Content-Type: multipart/form-data

{
  "name": "Quartz Crystal",
  "type": "Mineral",
  "glb": [file.glb],
  "video": [demo.mp4]
}
```

**Response:**
```json
{
  "glb_url": "/api/uploads/collections/1707250123-456789.glb",
  "video_url": "/api/uploads/collections/1707250456-789012.mp4"
}
```

### Production Deployment

For production, you can easily upgrade to cloud storage:
- **AWS S3**, **Google Cloud Storage**, **Azure Blob Storage**
- **DigitalOcean Spaces** (S3-compatible, cheaper)
- **Dedicated CDN** for faster file delivery

See [Deployment Guide](#-deployment) for upgrade instructions.

---

```
geology-platform-mern/
├── admin/                              # Admin Dashboard
│   ├── src/
│   │   ├── components/                # React components
│   │   ├── screens/                   # Page components
│   │   │   ├── collections/          # Collection management
│   │   │   ├── dashboard/            # Dashboard screen
│   │   │   └── error/                # Error pages
│   │   ├── Pages/                     # Additional pages
│   │   │   ├── Login_Admin/          # Admin login
│   │   │   └── library/              # Library management
│   │   ├── api/                       # API integration
│   │   │   └── collections/          # Collection queries & requests
│   │   ├── context/                   # React context (Theme, Sidebar)
│   │   ├── layout/                    # Layout components
│   │   ├── constants/                 # App constants
│   │   ├── App.jsx                    # Main app component
│   │   └── main.jsx                   # Entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── apiGeo/                             # Backend API
│   ├── controllers/                    # Request handlers
│   │   ├── authController.js          # Authentication logic
│   │   ├── userController.js          # User management
│   │   ├── collectionController.js    # Collection operations
│   │   ├── eventController.js         # Event management
│   │   ├── annonceController.js       # Announcement management
│   │   ├── book.controller.js         # Book management
│   │   └── Admin/                     # Admin-specific controllers
│   ├── models/                         # MongoDB schemas
│   │   ├── userModel.js
│   │   ├── collectionModel.js
│   │   ├── eventModel.js
│   │   ├── Announcement.js
│   │   └── book.model.js
│   ├── routes/                         # API routes
│   │   ├── usersRoutes.js
│   │   ├── collectionRouter.js
│   │   ├── eventsRouter.js
│   │   ├── annonceRoutes.js
│   │   ├── book.routes.js
│   │   ├── search.route.js
│   │   └── Admin/                     # Admin routes
│   ├── app.js                          # Express app configuration
│   ├── server.js                       # Server entry point
│   ├── package.json
│   ├── config.env                      # Environment variables (create this)
│   └── checkUSER.js / createUSER.js    # User utilities
│
└── geoFrontEnd/                        # Public Frontend
    ├── src/
    │   ├── Components/                 # React components
    │   │   ├── Navbar/                # Navigation
    │   │   ├── Footer/                # Footer
    │   │   └── ...
    │   ├── Pages/                      # Page components
    │   │   ├── Home/                  # Home page
    │   │   ├── Authentication/        # Login/Registration
    │   │   ├── Library/               # Collection library
    │   │   ├── Musee/                 # Museum/exhibitions
    │   │   └── ...
    │   ├── api/                        # API integration
    │   │   ├── collections/           # Collection queries
    │   │   ├── events/                # Event queries
    │   │   └── users/                 # User queries
    │   ├── assets/                     # Static assets
    │   │   ├── 3dModels/              # 3D model files
    │   │   ├── images/                # Image assets
    │   │   └── ...
    │   ├── main.jsx                    # Entry point
    │   └── index.css                   # Global styles
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── postcss.config.js
```

---

## 📦 Prerequisites

Ensure you have the following installed on your system:

- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **npm** v7 or higher (comes with Node.js)
- **MongoDB** v4.4+ ([Download](https://www.mongodb.com/try/download/community))
  - Or use **MongoDB Atlas** (cloud database)
- **Git** ([Download](https://git-scm.com/))
- **AWS Account** (for S3 file uploads) - Optional

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/ELHIM-HM/geology-platform-mern.git
cd geology-platform-mern
```

### Step 2: Install Backend Dependencies

```bash
cd apiGeo
npm install
cd ..
```

### Step 3: Install Admin Dashboard Dependencies

```bash
cd admin
npm install
cd ..
```

### Step 4: Install Frontend Dependencies

```bash
cd geoFrontEnd
npm install
cd ..
```

---

## ⚙️ Configuration

### Backend Configuration (apiGeo)

1. **Create a `.env` file** in the `apiGeo` directory:

```env
# Database Configuration
DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority

# Server Configuration
port=3000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
JWT_EXPIRE=7d

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# File Upload Configuration
# Files are stored locally in: /uploads/collections directory
# Accessible at: http://localhost:3000/api/uploads/collections/
```

**Note on File Storage:**
- Files are stored locally in the `apiGeo/uploads/collections` directory
- This directory is served as static files via the backend API
- No AWS S3 configuration needed for development
- For production deployment, consider using cloud storage or dedicated file servers

**Setting up MongoDB:**
- **Local MongoDB**: Make sure MongoDB is running (`mongod` command)
- **MongoDB Atlas**: 
  1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  2. Create a free account
  3. Create a cluster
  4. Generate credentials
  5. Replace `<USERNAME>`, `<PASSWORD>`, `<CLUSTER>` in the connection string

### Frontend Configuration (geoFrontEnd)

1. **Create a `.env.local` file** in the `geoFrontEnd` directory:

```env
VITE_API_URL=http://localhost:3000/api
VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
```

### Admin Dashboard Configuration (admin)

1. **Create a `.env.local` file** in the `admin` directory:

```env
VITE_API_URL=http://localhost:3000/api
```

---

## ▶️ Running the Application

### 🚀 Quick Start (Recommended)

**Start everything with one command** - seeds database and launches all services:

**Windows PowerShell:**
```powershell
.\start-all.ps1
```

**Windows Command Prompt:**
```cmd
start-all.bat
```

**Linux/macOS:**
```bash
chmod +x start-all.sh
./start-all.sh
```

This will:
1. ✅ Seed the database with sample data
2. ✅ Start Backend API on `http://localhost:3000`
3. ✅ Start Admin Dashboard on `http://localhost:5173`
4. ✅ Start Frontend on `http://localhost:5174`

Each service runs in its own terminal window.

---

### Manual Development Mode (All Services)

**Open 3 separate terminals** and run each service:

#### Terminal 1 - Seed Database (First Time Only):
```bash
cd apiGeo
npm run seed
```

#### Terminal 2 - Backend API:
```bash
cd apiGeo
npm start
```
API will run on: `http://localhost:3000`

#### Terminal 3 - Admin Dashboard:
```bash
cd admin
npm run dev
```
Admin will run on: `http://localhost:5173`

#### Terminal 4 - Frontend:
```bash
cd geoFrontEnd
npm run dev
```
Frontend will run on: `http://localhost:5174`

### Individual Development Commands

**Database Seeding:**
```bash
cd apiGeo
npm run seed              # Seed database with sample data
```

**Backend:**
```bash
cd apiGeo
npm start                 # Start with hot reload (nodemon)
npm run seed              # Seed database with sample data
```

**Admin Dashboard:**
```bash
cd admin
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
```

**Frontend:**
```bash
cd geoFrontEnd
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
```

### 📦 Seeding the Database

The project includes sample data for testing:

**What gets seeded:**
- 6 Collections (Quartz, Basalt, Granite, Ammonite, Trilobite, Obsidian)
- 2 Events
- 2 Announcements
- 2 Books
- 2 Users (admin/admin1234, editor/editor1234)

**Required files** (place in `apiGeo/uploads/collections/`):
- quartz.glb, quartz_demo.mp4
- basalt.glb, basalt_demo.mp4
- granite.glb, granite_demo.mp4
- ammonite.glb, ammonite_demo.mp4
- trilobite.glb, trilobite_demo.mp4
- obsidian.glb, obsidian_demo.mp4

**Run seed:**
```bash
cd apiGeo
npm run seed
```

---

## 🌐 Deployment

### Prerequisites for Deployment
- **Hosting Service**: Vercel, Netlify, Heroku, AWS, or DigitalOcean
- **MongoDB Atlas** account (recommended for production)
- **Domain Name** (optional but recommended)
- **SSL Certificate** (usually provided by hosting service)

### Deployment URLs (Replace with your actual URLs)

```
Production Frontend: https://geology-platform.example.com
Production Admin: https://admin.geology-platform.example.com
Production API: https://api.geology-platform.example.com
```

### Backend Deployment (Example: Heroku)

1. **Create Heroku Account** at [heroku.com](https://www.heroku.com)

2. **Install Heroku CLI**:
```bash
npm install -g heroku
heroku login
```

3. **Create Heroku App**:
```bash
cd apiGeo
heroku create your-app-name-api
```

4. **Set Environment Variables**:
```bash
heroku config:set DATABASE=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/<db>
heroku config:set JWT_SECRET=your_secret_key
heroku config:set NODE_ENV=production
```

5. **Deploy**:
```bash
git push heroku main
heroku logs --tail
```

### Frontend Deployment (Example: Vercel)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy Frontend**:
```bash
cd geoFrontEnd
vercel
```

3. **Update API URL** in Vercel environment variables:
```
VITE_API_URL=https://api.geology-platform.example.com
```

4. **Deploy Admin**:
```bash
cd ../admin
vercel
```

### Docker Deployment (Optional)

Create `Dockerfile` for backend:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t geology-api .
docker run -p 3000:3000 geology-api
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
https://api.geology-platform.example.com  # Production
```

### Authentication Routes

#### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Register
```
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Collections Routes

#### Get All Collections
```
GET /collections
```

#### Get Collection by ID
```
GET /collections/:id
```

#### Create Collection (Admin only)
```
POST /collections
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Collection Name",
  "description": "Description"
}
```

#### Update Collection (Admin only)
```
PUT /collections/:id
Authorization: Bearer <token>
```

#### Delete Collection (Admin only)
```
DELETE /collections/:id
Authorization: Bearer <token>
```

### Events Routes

#### Get All Events
```
GET /events
```

#### Create Event (Admin only)
```
POST /events
Authorization: Bearer <token>
```

### Announcements Routes

#### Get All Announcements
```
GET /announcements
```

#### Create Announcement (Admin only)
```
POST /announcements
Authorization: Bearer <token>
```

### Users Routes

#### Get User Profile
```
GET /users/profile
Authorization: Bearer <token>
```

#### Update User
```
PUT /users/:id
Authorization: Bearer <token>
```

---

## 🏗 Project Architecture

### Request Flow Diagram

```
┌─────────────┐
│   User      │
└──────┬──────┘
       │
       ▼
┌──────────────────────────────┐
│  Frontend (geoFrontEnd)      │
│  - React App                 │
│  - Vite Bundle              │
│  - React Query (TanStack)    │
└──────────┬───────────────────┘
           │ HTTP Requests
           ▼
┌──────────────────────────────┐
│  Admin Dashboard (admin)      │
│  - React App                 │
│  - Material-UI               │
│  - Data Management           │
└──────────┬───────────────────┘
           │ HTTP Requests
           ▼
┌──────────────────────────────┐
│  Backend API (apiGeo)         │
│  - Express Server            │
│  - Route Handlers            │
│  - Controllers               │
│  - Business Logic            │
└──────────┬───────────────────┘
           │ Database Queries
           ▼
┌──────────────────────────────┐
│  MongoDB Database            │
│  - Collections              │
│  - Events                   │
│  - Users                    │
│  - Announcements            │
└──────────────────────────────┘
```

### Authentication Flow

```
User Login
    │
    ▼
Backend validates credentials
    │
    ├─ Wrong? Return 401 Unauthorized
    │
    └─ Correct? Generate JWT token
        │
        ▼
    Return token to client
    │
    ▼
Client stores token (localStorage/sessionStorage)
    │
    ▼
Client includes token in Authorization header for protected routes
    │
    ▼
Backend verifies token
    │
    ├─ Invalid/Expired? Return 401
    │
    └─ Valid? Process request
```

---

## 👥 Contributing

### Development Workflow

1. **Create a feature branch**:
```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes** and commit:
```bash
git add .
git commit -m "feat: description of changes"
```

3. **Push to your fork**:
```bash
git push origin feature/your-feature-name
```

4. **Create a Pull Request** with a detailed description

### Code Style Guidelines

- Use ES6+ JavaScript syntax
- Follow React hooks best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Run linters before committing:

```bash
npm run lint        # Check for issues
npm run lint -- --fix  # Auto-fix issues
```

---

## 🔧 Troubleshooting

### MongoDB Connection Issues

**Error: `MongooseServerSelectionError`**

Solution:
```bash
# 1. Check MongoDB is running
mongod

# 2. Verify connection string in .env
# 3. Ensure IP whitelist in MongoDB Atlas (if using cloud)
# 4. Check credentials are correct
```

### Port Already in Use

**Error: `EADDRINUSE: address already in use :::3000`**

Solution (Windows PowerShell):
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID with actual process ID)
taskkill /PID <PID> /F

# Or use a different port in .env
# Change port=3000 to port=3001
```

### CORS Errors

**Error: `Access to XMLHttpRequest has been blocked by CORS policy`**

Solution:
1. Ensure backend has CORS enabled in `apiGeo/app.js`:
```javascript
const cors = require('cors');
app.use(cors());
```

2. Update frontend API URL to match backend URL in `.env.local`

### Node Modules Issues

```bash
# Clear cache and reinstall
rm -r node_modules package-lock.json   # macOS/Linux
rmdir /s node_modules                   # Windows
del package-lock.json                   # Windows

npm install
```

### Build Failures

```bash
# Clear Vite cache
rm -r dist node_modules/.vite         # macOS/Linux
rmdir /s dist                         # Windows

npm run build
```

---


## 📄 License

This project is licensed under the ISC License - see LICENSE file for details.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/)
- UI Components:  [Tailwind CSS](https://tailwindcss.com/)
- 3D Rendering: [Three.js](https://threejs.org/)

---

**Version**: 1.0.0 | **Last Updated**: February 2024
