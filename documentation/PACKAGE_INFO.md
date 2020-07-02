# List of packages that were used in this proposal.

## React

These are the main packages for React application setup. I believe no need for an extra explanation.

Package list:

  - `react`
  - `react-dom`
  - `react-router-dom`
  - `prop-types` (type validation for Component props, [more here](https://reactjs.org/docs/typechecking-with-proptypes.html))

Links:

  - Official documentation could be found at [reactjs.org](https://reactjs.org/docs/hello-world.html)
  - [React courses on egghead.io](https://egghead.io/browse/frameworks/react)

## Redux

I decided to use Redux to handle my application state.

Package list:

 - `redux`
 - `react-redux` (Set React bindings, [more here](https://redux.js.org/basics/usagewithreact))
 - `redux-mock-store` (A mock store for testing redux async action creators and middleware)
 - `redux-logger` (Middleware to log states, [more here](https://www.npmjs.com/package/redux-logger))

Links:

  - Official documentation could be found at [redux.js.org](https://redux.js.org/)

## Webpack

I have decided to use Webpack a code bundler. There is a **common** configuration that describes how to process project's code.
There are also **development** and **production** configurations that should set specific instuctions for each environment.
I believe that keep code into a separate files would reduce devs confusion and a need of overrite parameters.

Package list:

  - `webpack`
  - `webpack-cli` (to be able to run commands from command line)
  - `webpack-dev-middleware` (supports hot module reload)
  - `webpack-dev-server` (provides live reloading)
  - `webpack-merge` (merge configuration files)
  - `clean-webpack-plugin` (A webpack plugin to remove/clean your build folder(s) before building)
  - `html-webpack-plugin` (Plugin that simplifies creation of HTML files to serve your bundles)
  - `uglifyjs-webpack-plugin` (This plugin uses uglify-js to minify your JavaScript)
  - `url-loader` (A loader for webpack which transforms files into base64 URIs. Useful for any media content on page)
  - `autoprefixer` (Adds vendor prefixes for new or experimental CSS rules)
  - `webpack-bundle-analyzer` (Visualize size of webpack output files with an interactive zoomable treemap)
  - `ts-loader` (TypeScript loader for webpack)

Links:

  - Official documentation could be found at [webpack.js.org](https://webpack.js.org/concepts/)
  - [Monitor and analyze the app](https://developers.google.com/web/fundamentals/performance/webpack/monitor-and-analyze#analyze_why_the_bundle_is_so_large)

## Typescript

TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.

Package list:

  - `typescript`
  - `@types/jest`
  - `@types/react-dom`
  - `@types/react-redux`
  - `@types/redux-logger`
  - `@types/redux-mock-store`

## Babel

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

Package list:

  - `babel/core` (This is the main package)
  - `babel-loader` (This package allows transpiling JavaScript files using Babel and webpack)
  - `@babel/plugin-transform-regenerator` (Transform async/generator functions with regenerator)
  - `@babel/plugin-proposal-class-properties` (Enables properties and functions for ES6 class)
  - `@babel/preset-env` (Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments)
  - `@babel/preset-react` (Babel preset for all React plugins)
  - `babel-eslint` (This package allows to lint ALL valid Babel code)
  - `babel-jest` (It will be used by jest-cli to compile JS code)
  - `babel-plugin-transform-es2015-modules-commonjs` (It will transform JS code into CommonJS style as Jest is running tests in NodeJS environment)
  - `@babel/plugin-syntax-dynamic-import` (Allow parsing of import())
  - `babel-plugin-module-resolver` (A Babel plugin to add a new resolver for your modules when compiling your code using Babel)

Links:

  - Official documentation could be found at [babeljs.io](https://babeljs.io/)

## ESLint

ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript.
I am using a combination of default configuration and **airbnb** rule set.

Package list:

  - `eslint`
  - `eslint-config-airbnb` (Airbnb extensible shared config with quite strict React rules)
  - `eslint-plugin-import` (This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names)
  - `eslint-plugin-node` (Additional ESLint's rules for Node.js)
  - `eslint-plugin-react` (React specific linting rules for ESLint)
  - `eslint-plugin-jsx-a11y` (Static AST checker for accessibility rules on JSX elements)
  - `eslint-import-resolver-webpack` (Webpack-literate module resolution plugin for eslint-plugin-import)
  - `eslint-plugin-react-hooks` (This ESLint plugin enforces the Rules of Hooks)
  - `eslint-plugin-testing-library` (ESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library)

Links:

  - Official documentation could be found at [eslint.org](https://eslint.org/)

## Jest

JavaScript testing tool. One of them, but this one is widely used to test React application.
It has similar to other test runners syntax (describe, it). Also it includes build-in support for Spy, Mock and code coverage functionality.

Package list:

  - `jest`
  - `identity-obj-proxy` (It helps Jest to mock imported CSS module)
  - `ts-jest` (TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript)

Links:

  - Official documentation could be found at [jestjs.io](https://jestjs.io/)

## React Testing Library

Simple and complete React DOM testing utilities that encourage good testing practices.

Package list:

  - `@testing-library/react`

Links:

  - Official documentation could be found at [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## Project and git history

These tools aremeant to help developer to inforce better commit messages and build changelog list based on them.
Also they help to run a set of tasks to keep project code base healthy.

Package list:

  - `husky` (Husky can prevent bad git commit, git push and more 🐶 woof!)
  - `commitizen` (When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time)
  - `conventional-changelog-cli` (Generate a changelog from git metadata)
  - `cz-conventional-changelog` (Part of the commitizen family. Prompts for conventional changelog standard)
  - `@commitlint/cli` (Lint commit messages)
  - `@commitlint/config-angular` (Lint your commits, angular-style)

### leasot

Parse and output TODOs and FIXMEs from comments in your files

Links:

  - Official documentation could be found at [npmjs.com/package/leasot](https://www.npmjs.com/package/leasot)

### cross-env

Most Windows command prompts will choke when you set environment variables with NODE_ENV=production like that.
cross-env makes it so you can have a single command without worrying about setting
or using the environment variable properly for the platform.
Just set it like you would if it's running on a POSIX system, and cross-env will take care of setting it properly.

Links:

  - Official documentation could be found at [npmjs.com/package/cross-env](https://www.npmjs.com/package/cross-env)

### dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

Links:

  - Official documentation could be found at [npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

### open

This is meant to be used in command-line tools and scripts, not in the browser.

Links:

  - Official documentation could be found at [npmjs.com/package/open](https://www.npmjs.com/package/open)

### coveralls

Coveralls.io support for Node.js. Get the great coverage reporting of coveralls.io and add a cool coverage button (like the one above) to your README.

Supported CI services: Travis CI, CodeShip, CircleCI, Jenkins, Gitlab CI, AppVeyor, Buildkite, GitHub Actions CI, CodeFresh

Links:

  - Official documentation could be found at [npmjs.com/package/coveralls](https://www.npmjs.com/package/coveralls)