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

Firstly, you should clone git repository into your local environment (desktop, laptop, etc.).

Then there are two ways to install project.

##### First

Use `bash` script to setup project (it also works on Window with GIT Bash that was installed with UNIX command helpers).

    ./setup-project.sh

##### Second

1. Copy GIT hook scripts into the GIT folder:

        cp assets/git-hooks/* .git/hooks/
        chmod +x .git/hooks/commit-msg
        chmod +x .git/hooks/post-merge
        chmod +x .git/hooks/pre-commit

2. Install NPM dependencies:

        npm install

3. Run unit tests to generate Test coverage data:

        npm test

## Development phase

Code base will be checked against `code style rule set` each time you start development.
Application will be rejected if ESLint found any error.

    npm start

As a developer you responsible to keep code base clean and bug free.
But, there are times when you can't perform refactoring right away, or you see possible bug that is out of your task scope.
Then you should make a comment on that as it shown below:

    // TODO: implement me
    // FIXME: this is a bug (comment on code)

TODO list should be checked by PM or team lead to keep project healthy.

    # to generate a list of required actions (TODO.md)
    npm run todo-cli

    # to see a list in terminal
    npm run todo

You could check current [TODO list status](TODO.md)

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

## How to contribute?

Firstly, you should set a working copy on your localhost.
Secondly, create a feature/bug branch from the origin source.

Then commit all changes to your branch. Do not forget about unit tests.
Check out `commit message format` requirements in `documentation/COMMIT_RULES.md`.

And the final step is to create a PR.

## How to report a bug?

You should create an **Issue**. More on how to do it on [github help](https://help.github.com/articles/creating-an-issue/).

## Known issues

##### No vendor prefixes in CSS

In order to have them in your code base, you should have `.browserlistrc` in your root. Read more about it [in official docs](https://github.com/browserslist/browserslist#best-practices).

##### Postcss-loader

This module resolves all relative paths from style root folder (from an entry point).

    @example:
    ./src/styles/default/style.scss
    ./src/assets/fonts/myfont.woff2

    you should specify path in style.scss as `../assets/fonts/myfont.woff2`

## TODO

- [ ] Add React router

- [ ] add Size limit module for production (https://github.com/ai/size-limit?utm_source=CSS-Weekly&utm_campaign=Issue-286&utm_medium=email)

- [ ] connect to Travis CI and Coverall

- [ ] check how webpack reloads if URL contain other than root path (set publickPath to '/*' to fix issue)

- [ ] investigate react-vistualized (https://www.npmjs.com/package/react-virtualized)

- [ ] Add react international package: [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) and [React A11y](https://www.npmjs.com/package/react-a11y)

- [ ] use local-storage service (code base) to save UI user settings

- [ ] add integration tests

- [ ] add e2e tests

- [ ] Add description on how to handle DOM event listeners in Components