#!/bin/sh
set -e

echo "Running Prisma migrations..."
node node_modules/prisma/build/index.js migrate deploy

echo "Seeding database..."
node prisma/seed-prod.js

echo "Starting server..."
exec node server.js
