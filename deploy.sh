#!/bin/bash
set -e

cd /var/www/s4d-website

npm install
rm -rf .next standalone
npm run build

mkdir standalone
cp -r .next/standalone/* standalone/
cp -r .next standalone/
cp -r public standalone/
cp .env.production standalone/.env

cd /
pm2 restart s4d-website --cwd /var/www/s4d-website/standalone \
|| PORT=3030 pm2 start /var/www/s4d-website/standalone/server.js \
   --name s4d-website \
   --cwd /var/www/s4d-website/standalone

pm2 save

