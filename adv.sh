#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <day_number>"
  exit 1
fi

DIR_NAME="day$1"
mkdir -p "$DIR_NAME"

cp data1 "$DIR_NAME"
cp data2 "$DIR_NAME"
cp index.js "$DIR_NAME"
cd "$DIR_NAME"
code index.js
