#!/bin/bash

# Build the project
npm run build

# Backup current source files
mkdir -p .backup
cp -r src .backup/
cp -r public .backup/
cp index.html .backup/
cp vite.config.js .backup/
cp package.json .backup/

# Clear root files (keep essential directories)
rm -f index.html

# Copy dist contents to root
cp dist/index.html ./
cp -r dist/assets ./assets 2>/dev/null || true

echo "Deployment prepared. Dist contents copied to root."
echo "You can now commit and push to deploy."
