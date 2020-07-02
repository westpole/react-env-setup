# React environment setup.

[![Coverage Status](https://coveralls.io/repos/github/westpole/react-env-setup/badge.svg?branch=master)](https://coveralls.io/github/westpole/react-env-setup?branch=master)
[![Build Status](https://travis-ci.org/westpole/react-env-setup.svg?branch=master)](https://travis-ci.org/westpole/react-env-setup)

This is a proposal on how to setup React project.
If you would like to get more information on what package was included and what was the reason, then [review PACKAGE_INFO file](documentation/PACKAGE_INFO.md)

## Table of contents

  * Documentation
    * [Project packages info](documentation/PACKAGE_INFO.md)
    * [Example Application](documentation/example/GENERAL_INFO.md)
    * [Code syntax ruleset](documentation/ESLINT_RULESET.md)
    * [Git commit rules](documentation/COMMIT_RULES.md)
    * [Continuous integration](documentation/CI.md)
  * [Current environment setup](#current-environment-setup)
  * [How to setup](#how-to-setup)
  * [How to report a bug](#how-to-report-a-bug)
  * [Known issues](#known-issues)
  * [Release schedule](documentation/RELEASE_SCHEDULE.md)

## Current environment setup

 - Webpack - automate dev and build tasks
 - Babel - transpile JS code to be readable by browsers
 - Eslint - syntax checking
 - Typescript - static type checking
 - React - application logic and UI presentation
 - Redux - manage application data state
 - Jest + testing-library - unit tests
 - Husky + Commitzen - better git commits

## How to setup

In progress ...

## How to report a bug

You should create an **Issue**. More on how to do it on [github help](https://help.github.com/articles/creating-an-issue/).

## Known issues

1. TravisCI and Github actions have some issue with `App` word in a filename. They will fail to resolve path those files.