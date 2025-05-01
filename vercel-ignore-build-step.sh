#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "gh-pages" ]]; then
  # skip build
  echo " - Build cancelled"
  exit 0
else
  # proceed with build
  echo "✅ - Build can proceed"
  exit 1
fi
