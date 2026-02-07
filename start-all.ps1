# Geology Platform - Complete Startup Script
# This script seeds the database and starts all services

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Geology Platform - Starting All Services" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get the root directory (where this script is located)
$rootDir = $PSScriptRoot

Write-Host "Root directory: $rootDir" -ForegroundColor Gray
Write-Host ""

# Step 1: Seed the database
Write-Host "[1/4] Seeding database..." -ForegroundColor Yellow
Write-Host "Note: Make sure MongoDB Atlas is accessible or use local MongoDB" -ForegroundColor Gray
Set-Location "$rootDir\apiGeo"
npm run seed

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Database seeding failed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Common issues:" -ForegroundColor Yellow
    Write-Host "  1. MongoDB Atlas connection timeout - Check internet connection" -ForegroundColor White
    Write-Host "  2. MongoDB Atlas IP whitelist - Add your IP to Atlas" -ForegroundColor White
    Write-Host "  3. Cluster paused - Resume cluster in MongoDB Atlas" -ForegroundColor White
    Write-Host "  4. Local MongoDB - Use: mongodb://localhost:27017/geologydb" -ForegroundColor White
    Write-Host ""
    Write-Host "To skip seeding and start services anyway, edit apiGeo\.env" -ForegroundColor Cyan
    Write-Host ""
    $continue = Read-Host "Skip seeding and continue? (y/N)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        exit 1
    }
    Write-Host "Continuing without seeding..." -ForegroundColor Yellow
}

Write-Host "Database seeded successfully!" -ForegroundColor Green
Write-Host ""

# Step 2: Start Backend API
Write-Host "[2/4] Starting Backend API (port 3000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$rootDir\apiGeo'; Write-Host 'Backend API Server' -ForegroundColor Cyan; npm start"
Start-Sleep -Seconds 3

# Step 3: Start Admin Dashboard
Write-Host "[3/4] Starting Admin Dashboard (port 5173)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$rootDir\admin'; Write-Host 'Admin Dashboard' -ForegroundColor Magenta; npm run dev"
Start-Sleep -Seconds 3

# Step 4: Start Frontend
Write-Host "[4/4] Starting Frontend (port 5174)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$rootDir\geoFrontEnd'; Write-Host 'Frontend Application' -ForegroundColor Green; npm run dev"
Start-Sleep -Seconds 2

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  All Services Started Successfully!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Access your applications at:" -ForegroundColor White
Write-Host "  Backend API:      http://localhost:3000" -ForegroundColor Cyan
Write-Host "  Admin Dashboard:  http://localhost:5173" -ForegroundColor Magenta
Write-Host "  Frontend:         http://localhost:5174" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C in each window to stop the servers" -ForegroundColor Yellow
Write-Host ""

Read-Host "Press Enter to close this window"
