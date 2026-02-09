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

---

## 📞 Support

- 📧 **Email**: elhimhamza7@gmail.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/ELHIM-HM/geology-platform-mern/issues)
---

## 📄 License

ISC License - feel free to use for your projects!

---

<div align="center">

**Built with ❤️ using React, Node.js, and MongoDB**

⭐ Star this repo if you find it helpful!

*Version 1.0.0 | Last Updated: February 2026*

</div>

---

