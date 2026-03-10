#!/bin/sh
set -e

echo "Running Prisma migrations..."
cd /migrate && npx prisma migrate deploy

echo "Seeding database..."
cd /migrate && node prisma/seed-prod.js

echo "Starting server..."
cd /app && exec node server.js
