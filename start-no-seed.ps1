# Geology Platform - Start Without Seeding
# This script starts all services without seeding the database

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Geology Platform - Starting Services" -ForegroundColor Cyan
Write-Host "  (Without Database Seeding)" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get the root directory
$rootDir = $PSScriptRoot

Write-Host "Root directory: $rootDir" -ForegroundColor Gray
Write-Host ""

# Start Backend API
Write-Host "[1/3] Starting Backend API (port 3000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$rootDir\apiGeo'; Write-Host 'Backend API Server' -ForegroundColor Cyan; npm start"
Start-Sleep -Seconds 3

# Start Admin Dashboard
Write-Host "[2/3] Starting Admin Dashboard (port 5173)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$rootDir\admin'; Write-Host 'Admin Dashboard' -ForegroundColor Magenta; npm run dev"
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "[3/3] Starting Frontend (port 5174)..." -ForegroundColor Yellow
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
Write-Host "Note: Database was not seeded. Run 'npm run seed' in apiGeo folder if needed." -ForegroundColor Yellow
Write-Host "Press Ctrl+C in each window to stop the servers" -ForegroundColor Gray
Write-Host ""

Read-Host "Press Enter to close this window"
