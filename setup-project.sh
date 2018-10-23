#!/bin/sh

# ==================
# Setup project script.
# It should be run only on a new setup right after GIT repository was cloned.
#
# What it should do:
#
# 1. Copy GIT hook scripts into .git folder
# 2. Install NPM packages
# 3. Run unit test and create code coverage report

LIGHTBLUE='\033[1;34m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

echo "${LIGHTBLUE}"
echo " ************************************************************************"
echo " * Setup development environment                                        *"
echo " * Project: React Environment Setup                                     *"
echo " * Author: Stanislav aka westpole                                       *"
echo " ************************************************************************"
echo "${NC}"

# Copy GIT hook scripts into .git folder
# ------------------------------------------------------------------------------
echo " ${YELLOW}[ ]${NC} Coping GIT hook scripts into .git folder..."

FILES=assets/git-hooks/*
for file in $FILES
do
    SUBSTRING=$(echo ${file} | grep -oP "[a-zA-Z0-9\-]{1,}$")
    echo " ${YELLOW}[ ]${NC} Coping $SUBSTRING ..."
    cp -n ${file} .git/hooks
    echo " ${YELLOW}[ ]${NC} Set $SUBSTRING executable"
    chmod +x .git/hooks/"$SUBSTRING"
done

echo "${LIGHTBLUE}"
echo " ----[ NPM setup ]----"
echo "${NC}"

# Install NPM packages
# ------------------------------------------------------------------------------
npm install

# Run unit test and create code coverage report
# ------------------------------------------------------------------------------
npm test

echo "${LIGHTBLUE}"
echo " ************************************************************************"
echo " * Setup is completed                                                   *"
echo " * Enjoy ;)                                                             *"
echo " ************************************************************************"
echo "${NC}"