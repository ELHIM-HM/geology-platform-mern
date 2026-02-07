const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// 1. Load Environment Variables
dotenv.config({ path: "./.env" });

// 2. Import the App (Ensure CORS is inside app.js!)
const app = require("./app");

const DB = process.env.DATABASE;

// 3. DB CONNECTION
mongoose
  .connect(DB, {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log("✅ DB CONNECTION SUCCESSFUL");
    
    // 4. START THE SERVER (Only after DB is successful)
    const port = process.env.PORT || 3000; 
    app.listen(port, () => {
      console.log(`🚀 App running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB CONNECTION ERROR:", err.message);
    process.exit(1); // Kill the process if the DB fails
  });