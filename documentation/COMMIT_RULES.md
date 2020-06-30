# Repository history

Current setup utilizes [Husky](https://www.npmjs.com/package/husky) to handle commit process for GIT repository.

[@commitlint/config-angular](https://www.npmjs.com/package/@commitlint/config-angular) is used to apply rules to a commit message.

## Message types

```
  'build',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
```

#### Message format

##### short message

```sh
  feat: some message
```

##### full message

```sh
  feat: some message

  - first job
  - another option
```

## CLI commands

##### run regular check on code base

```sh
  npm run lint
```

##### run regular check on test files

```sh
  npm run lint:test
```

##### run check for report collector

```sh
  npm run lint:report
```