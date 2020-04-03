#!/usr/bin/env bash

HUGOVERSION=0.68.3

wget https://github.com/gohugoio/hugo/releases/download/v$HUGOVERSION/hugo_${HUGOVERSION}_Linux-64bit.tar.gz
tar xvzf hugo_${HUGOVERSION}_Linux-64bit.tar.gz

rm hugo_${HUGOVERSION}_Linux-64bit.tar.gz

./hugo

npm install atomic-algolia
node_modules/.bin/atomic-algolia

echo $PLATFORM_VARIABLES | base64 --decode
