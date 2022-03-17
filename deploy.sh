#!/usr/bin/env sh

set -e

npm run build

cd dist

git init

git add -A

git commit -m "new deploy"

git push -f git@github.com:VictorDavid98/LandingLock.git main:gh-pages

cd -
