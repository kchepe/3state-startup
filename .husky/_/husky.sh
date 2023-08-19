#!/bin/sh

echo "Running the frontend husky pre-commit"
. "$(dirname -- "$0")/_/husky.sh"
echo "Running lint-staged..."
cd ./client && yarn ts-lint-commit-hook
cd ./client && yarn eslint
echo "Lint-staged complete."
