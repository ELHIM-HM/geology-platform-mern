#!/bin/bash
# Geology Platform - Complete Startup Script for Linux/macOS
# This script seeds the database and starts all services

echo "========================================"
echo "  Geology Platform - Starting All Services"
echo "========================================"
echo ""

# Get the script's directory
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Step 1: Seed the database
echo "[1/4] Seeding database..."
cd "$ROOT_DIR/apiGeo"
npm run seed

if [ $? -ne 0 ]; then
    echo "Database seeding failed. Please check your configuration."
    read -p "Press Enter to exit"
    exit 1
fi

echo "Database seeded successfully!"
echo ""

# Step 2: Start Backend API
echo "[2/4] Starting Backend API (port 3000)..."
cd "$ROOT_DIR/apiGeo"
gnome-terminal --title="Backend API Server" -- bash -c "npm start; exec bash" 2>/dev/null || \
xterm -T "Backend API Server" -e "npm start" 2>/dev/null || \
osascript -e 'tell app "Terminal" to do script "cd '"$ROOT_DIR"'/apiGeo && npm start"' 2>/dev/null &
sleep 3

# Step 3: Start Admin Dashboard
echo "[3/4] Starting Admin Dashboard (port 5173)..."
cd "$ROOT_DIR/admin"
gnome-terminal --title="Admin Dashboard" -- bash -c "npm run dev; exec bash" 2>/dev/null || \
xterm -T "Admin Dashboard" -e "npm run dev" 2>/dev/null || \
osascript -e 'tell app "Terminal" to do script "cd '"$ROOT_DIR"'/admin && npm run dev"' 2>/dev/null &
sleep 3

# Step 4: Start Frontend
echo "[4/4] Starting Frontend (port 5174)..."
cd "$ROOT_DIR/geoFrontEnd"
gnome-terminal --title="Frontend Application" -- bash -c "npm run dev; exec bash" 2>/dev/null || \
xterm -T "Frontend Application" -e "npm run dev" 2>/dev/null || \
osascript -e 'tell app "Terminal" to do script "cd '"$ROOT_DIR"'/geoFrontEnd && npm run dev"' 2>/dev/null &
sleep 2

echo ""
echo "========================================"
echo "  All Services Started Successfully!"
echo "========================================"
echo ""
echo "Access your applications at:"
echo "  Backend API:      http://localhost:3000"
echo "  Admin Dashboard:  http://localhost:5173"
echo "  Frontend:         http://localhost:5174"
echo ""
echo "Press Ctrl+C in each terminal to stop the servers"
echo ""

read -p "Press Enter to close this window"
