#!/bin/bash

# check to see if they passed in which hack hour they want to test
if [ -z $1 ]; then
  echo -en '\n'
  echo -e "\033[0;31mMake sure to format the command properly:\033[0m"
  echo -en '\n'
  echo -e "\033[01;36mCorrect Syntax:\033[0m 'npm run test-algo <algo name>' "; 
  echo -en '\n'
# check to ensure that the test file being requested exists
elif [ ! -f "./algorithms/__tests__/$1" ] && [ ! -f "./algorithms/__tests__/$1.js" ]; then
  echo -en '\n'
  echo -e "\033[0;31mTest file does not exist for:\033[0m \033[01;36m$1\033[0m"
  echo -e "\033[0;31mPlease check your spelling.\033[0m"
  echo -en '\n'
# run the test file
else 
  echo Running tests for $1
  echo -en '\n'
  if [[ $1 == *".js"* ]]; then
    ./node_modules/.bin/jest __tests__/$1
  else
    ./node_modules/.bin/jest __tests__/$1.js
  fi
fi