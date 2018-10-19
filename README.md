# Setup React application.

This is a proposal on how to setup project.
If you would like to get more information on what package was included and what was the reason, then [visit PACKAGE_INFO file](documentation/PACKAGE_INFO.md)

## Example project

Project's requirements are [here](documentation/PROJECT_REQUIREMENTS.md)

Project has sets of coding style rules, that controls by ESLint library.
More on [the set of rules could be found here](documentation/ESLINT_RULESET.md).
This library help developer to keep code base style the same which should reduce time on reading and understanding other developer's code.
ESLint also helps junior developer to learn how to write correctly.
Code base will be checked each time:

  - before run in development mode (npm start)
  - before run of unit tests set
  - before commit to GIT local repository

You can also run check manually:

    npm run lint

## How to setup?

Firstly, you should clone git repository into your local environment (desktop, laptop, etc.)

Next, you should install NPM packages by running command below:

    npm install

## How to run in development?

## How to commit any changes to GIT repository?

This project uses `conventional-changelog` module to generate a changelog from git metadata.

#### Recommended workflow

  1. Make changes
  2. Commit those changes to a Feature or a Bug branch
  3. Make sure CI server turns green
  4. Merge branch to release branch (ex. master)
  4. Bump version in package.json by running command below

          npm version [major|minor|patch]

  5. Generate Changelog

          npm run changelog

  6. Commit package.json and CHANGELOG.md files

          npm add .
          npm commit -m "Release, <date>"

  8. Push changes and tags

          npm push <origin> <remote branch>
          npm push --tags

For more details on how to construct commit message see at [ESLint Convention](documentation/COMMIT_RULES.md).

## How to prepare code to release?

Make sure that all code changes were fully tested and committed to the `master` branch.

## Known issues

## TODO

- [ ] Add JSDOCS (specify doc generator npm script)

- [ ] Add GIT hook scripts to check commit massages and to run tests on commit (add message format)

- [ ] Add React router

- [ ] add Error handler (display human readable error messages and log detailed info for developer)

- [ ] add a checker for "console.log"

- [ ] add a section on how to collaborate and how to log an issue

- [ ] setup autoprefixer for CSS

- [ ] add Size limit module for production (https://github.com/ai/size-limit?utm_source=CSS-Weekly&utm_campaign=Issue-286&utm_medium=email)

- [ ] connect to Travis CI and Coverall

- [ ] add setup GIT hooks in NPM post-install phase

- [ ] check how webpack reloads if URL contain other than root path (set publickPath to '/*' to fix issue)

- [ ] investigate react-vistualized

- [ ] Add react international package

- [ ] Investigate on how to monitor Reducers in dev environment (log state history). More on Redux docs in recipes section.

- [ ] use local-storage service (code base) to save UI user settings

- [ ] add unit tests, set GIT commit to rely on coverage level

- [ ] add integration

- [ ] add e2e tests