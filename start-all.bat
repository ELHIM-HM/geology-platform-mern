@echo off
REM Geology Platform - Complete Startup Script for Windows Command Prompt
REM This script seeds the database and starts all services

echo ========================================
echo   Geology Platform - Starting All Services
echo ========================================
echo.

REM Get the script's directory
set ROOT_DIR=%~dp0

REM Step 1: Seed the database
echo [1/4] Seeding database...
cd /d "%ROOT_DIR%apiGeo"
call npm run seed

if %ERRORLEVEL% neq 0 (
    echo Database seeding failed. Please check your configuration.
    pause
    exit /b 1
)

echo Database seeded successfully!
echo.

REM Step 2: Start Backend API
echo [2/4] Starting Backend API (port 3000)...
start "Backend API Server" cmd /k "cd /d %ROOT_DIR%apiGeo && npm start"
timeout /t 3 /nobreak >nul

REM Step 3: Start Admin Dashboard
echo [3/4] Starting Admin Dashboard (port 5173)...
start "Admin Dashboard" cmd /k "cd /d %ROOT_DIR%admin && npm run dev"
timeout /t 3 /nobreak >nul

REM Step 4: Start Frontend
echo [4/4] Starting Frontend (port 5174)...
start "Frontend Application" cmd /k "cd /d %ROOT_DIR%geoFrontEnd && npm run dev"
timeout /t 2 /nobreak >nul

echo.
echo ========================================
echo   All Services Started Successfully!
echo ========================================
echo.
echo Access your applications at:
echo   Backend API:      http://localhost:3000
echo   Admin Dashboard:  http://localhost:5173
echo   Frontend:         http://localhost:5174
echo.
echo Press Ctrl+C in each window to stop the servers
echo.

pause
