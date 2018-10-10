module.exports = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  collectCoverage: true,
  coverageReporters: [
    'html',
    'lcov'
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/src/scripts/index.jsx',
    '!enzyme.config.js',
    '!jest.config.js',
    '!webpack.common.js',
    '!webpack.dev.js',
    '!webpack.prod.js',
    '!**/coverage/**'
  ],
  setupTestFrameworkScriptFile: './enzyme.config.js',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  },
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy'
  }
};