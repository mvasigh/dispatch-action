#!/bin/sh -l

REMOTE=$1
BRANCH=$2

git diff HEAD --exit-code &&
yarn build &&
yarn build:commit &&
git push ${REMOTE} ${BRANCH}
