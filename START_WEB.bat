@echo off
title SUGAR CRUSH // ARC 2025 Web Server
cd /d "%~dp0"
echo Starting SUGAR CRUSH Interactive Zine on http://localhost:8080 ...
start "" "http://localhost:8080"
python -m http.server 8080
