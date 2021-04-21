#!/bin/bash

# check to see if they passed in which hack hour they want to test
if [ -z $1 ]; then
  echo -en '\n'
  echo -e "\033[0;31mMake sure to format the command properly:\033[0m"
  echo -en '\n'
  echo -e "\033[01;36mCorrect Syntax:\033[0m 'npm run test-algo <hh name>' "; 
  echo -en '\n'
# check to ensure that the test file being requested exists
elif [ ! -f "./__tests__/$1" ] && [ ! -f "./__tests__/$1.js" ]; then
  echo -en '\n'
  echo -e "\033[0;31mTest file does not exist for:\033[0m \033[01;36m$1\033[0m"
  echo -e "\033[0;31mPlease check your spelling.\033[0m"
  echo -e "\033[0;31mIf you think you've gotten this message in error, please speak to a fellow.\033[0m"
  echo -en '\n'
# run the test file
else 
  echo Running tests for $1
  echo -en '\n'
  # if they passed the hh to test in as <hh>.js, then don't add .js to filename
  if [[ $1 == *".js"* ]]; then
    ./node_modules/.bin/jest __tests__/$1
  # if they followed instructions and passed in just the name of the HH:
  else
    ./node_modules/.bin/jest __tests__/$1.js
  fi
fi