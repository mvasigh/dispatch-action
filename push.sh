#!/bin/sh -l

git diff HEAD --exit-code &&
yarn build &&
yarn build:commit &&
git push
