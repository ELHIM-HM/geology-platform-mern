# Quick Start Guide - Geology Platform

## 🚀 One-Command Startup

### Windows (PowerShell)
```powershell
.\start-all.ps1
```

### Windows (Command Prompt)
```cmd
start-all.bat
```

### Linux/macOS
```bash
chmod +x start-all.sh
./start-all.sh
```

---

## 📋 What Happens

1. **Seeds Database** with:
   - 6 Geological Collections
   - 2 Events
   - 2 Announcements
   - 2 Books
   - 2 Users (admin/admin1234, editor/editor1234)

2. **Starts Services**:
   - Backend API → http://localhost:3000
   - Admin Dashboard → http://localhost:5173
   - Frontend → http://localhost:5174

---

## 📁 Required Files

Place these in `apiGeo/uploads/collections/` before seeding:

```
quartz.glb
quartz_demo.mp4
basalt.glb
basalt_demo.mp4
granite.glb
granite_demo.mp4
ammonite.glb
ammonite_demo.mp4
trilobite.glb
trilobite_demo.mp4
obsidian.glb
obsidian_demo.mp4
```

---

## 🔐 Login Credentials

**Admin User:**
- Username: `admin`
- Password: `admin1234`

**Editor User:**
- Username: `editor`
- Password: `editor1234`

---

## 🛠 Manual Commands

### Seed Database Only
```bash
cd apiGeo
npm run seed
```

### Start Services Individually
```bash
# Backend
cd apiGeo
npm start

# Admin
cd admin
npm run dev

# Frontend
cd geoFrontEnd
npm run dev
```

---

## 🌐 Access URLs

| Service | URL |
|---------|-----|
| Backend API | http://localhost:3000 |
| API Uploads | http://localhost:3000/api/uploads/collections/ |
| Admin Dashboard | http://localhost:5173 |
| Frontend | http://localhost:5174 |

---

## 🔧 Troubleshooting

### Database Connection Error
**Problem:** MongoDB Atlas connection timeout or ECONNREFUSED

**Solutions:**
1. **Check Internet Connection** - MongoDB Atlas requires internet access
2. **MongoDB Atlas IP Whitelist:**
   - Go to MongoDB Atlas → Network Access
   - Add your current IP or use `0.0.0.0/0` (allows all IPs)
3. **Resume Paused Cluster:**
   - Go to MongoDB Atlas → Clusters
   - Click "Resume" if cluster is paused
4. **Use Local MongoDB:**
   - Install MongoDB locally
   - Update `apiGeo/.env`:
     ```
     DATABASE=mongodb://localhost:27017/geologydb
     ```

**Start Without Seeding:**
```powershell
.\start-no-seed.ps1
```

### Port Already in Use
```powershell
# Windows - Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID)
taskkill /PID <PID> /F
```

### Files Not Found
- Ensure you placed all .glb and .mp4 files in `apiGeo/uploads/collections/`
- Run seed script again after adding files

---

## 📚 Need Help?

See the full [README.md](README.md) for detailed documentation.
