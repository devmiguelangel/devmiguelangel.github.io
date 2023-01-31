#!/usr/bin/env sh

# abort on errors
set -e
# Switch to gh-pages branch
git show-branch gh-pages &>/dev/null && git checkout gh-pages || git checkout -b gh-pages
# Update brach
git merge main

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

cd -

git add -A
git add dist -f
git commit -m 'deploy'

git subtree push --prefix dist origin gh-pages

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
