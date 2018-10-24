# List of packages that were used in this proposal.

## React

These are the main packages for React application setup. I believe no need for an extra explanation.

Package list:

  - `react`
  - `react-dom`
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

Links:

  - Official documentation could be found at [redux.js.org](https://redux.js.org/)

## Redux-Saga

This library is intended to handle side effects for Redux store (i.e. asynchronous things like data fetching and impure things like accessing the browser cache).

Package list:

  - `redux-saga`

Links:

  - Official documentation could be found at [redux-saga.js.org](https://redux-saga.js.org/)

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
  - `mini-css-extract-plugin` (It supports On-Demand-Loading of CSS and SourceMaps. And it requires by webpack 4 to work)
  - `css-loader` (The css-loader interprets @import and url() like import/require() and will resolve them)
  - `sass-loader` (Loads a Sass/SCSS file and compiles it to CSS.)
  - `style-loader` (Adds CSS to the DOM by injecting a style tag)
  - `node-sass` (It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware)
  - `url-loader` (A loader for webpack which transforms files into base64 URIs. Useful for any media content on page)

Links:

  - Official documentation could be found at [webpack.js.org](https://webpack.js.org/concepts/)

## Babel

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

Package list:

  - `@babel/polyfill` (Required by Redux-Saga as it uses generator functions)
  - `@babel/core` (This is the main package)
  - `babel-loader` (This package allows transpiling JavaScript files using Babel and webpack)
  - `@babel/plugin-transform-regenerator` (Transform async/generator functions with regenerator)
  - `@babel/plugin-proposal-class-properties` (Enables properties and functions for ES6 class)
  - `@babel/preset-env` (Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments)
  - `@babel/preset-react` (Babel preset for all React plugins)
  - `babel-core^7.0.0-bridge.0` (Fix the issue with Babel 7's transition to scopes, [more here](https://github.com/babel/babel-bridge))
  - `babel-eslint` (This package allows to lint ALL valid Babel code)
  - `babel-jest` (It will be used by jest-cli to compile JS code)
  - `babel-plugin-transform-es2015-modules-commonjs` (It will transform JS code into CommonJS style as Jest is running tests in NodeJS environment)

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

Links:

  - Official documentation could be found at [eslint.org](https://eslint.org/)

## SASS

Stable and powerful preprocessor for CSS language. Webpack extention **sass-loader** (see above) was used to process style files.

Links:

  - Official documentation could be found at [sass-lang.com](https://sass-lang.com/)

## Jest

JavaScript testing tool. One of them, but this one is widely used to test React application.
It has similar to other test runners syntax (describe, it). Also it includes build-in support for Spy, Mock and code coverage functionality.

Package list:

  - `jest`
  - `identity-obj-proxy` (It helps Jest to mock imported CSS module)

Links:

  - Official documentation could be found at [jestjs.io](https://jestjs.io/)

## Enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

Package list:

  - `enzyme`
  - `enzyme-adapter-react-16` (This is an adapter for a current React version)
  - `enzyme-to-json` (It helps to create a code snapshot, in order, to track code base changes)

Links:

  - Official documentation could be found at [airbnb.io/enzyme](https://airbnb.io/enzyme/)

## Useful libraries

### UUID

Simple, fast generation of RFC4122 UUIDS. I am going to use `Version 4` that generates sequence ramdomly.

Links:

  - Official documentation could be found at [www.npmjs.com/package/uuid](https://www.npmjs.com/package/uuid)

### Snyk

Snyk’s CLI helps you find and fix known vulnerabilities in your dependencies, both ad hoc and as part of your CI (Build) system.
It supports Node.js, Ruby, Python, Java, Scala, Go and .NET.

Links:

  - Official documentation could be found at [app.snyk.io/docs/using-snyk](https://app.snyk.io/docs/using-snyk)

### conventional-changelog

Generate a changelog from git metadata.

Package list:

  - `conventional-changelog-cli`
  - `conventional-changelog-eslint` (this is a set of rules for Commit message format)

Links:

  - Official documentation for [conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)
  - Official documentation for [conventional-changelog-eslint](https://www.npmjs.com/package/conventional-changelog-eslint)

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