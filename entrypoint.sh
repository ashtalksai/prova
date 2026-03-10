#!/bin/sh
set -e

echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Seeding database..."
node prisma/seed-prod.js

echo "Starting server..."
exec node server.js
