#!/bin/sh

echo "Generate Prisma"
yarn prisma generate

echo "Starting development server..."
yarn start:dev

exit 0