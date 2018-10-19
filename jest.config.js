module.exports = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testMatch: [
    '**/?(*.)+(spec|test).js?(x)'
  ],
  collectCoverage: true,
  coverageReporters: [
    'html',
    'lcov'
  ],
  roots: [
    '<rootDir>/tests/unit/'
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/src/scripts/index.jsx',
    '!**/src/assets/**',
    '!**/src/styles/**',
    '!enzyme.config.js',
    '!jest.config.js',
    '!webpack.common.js',
    '!webpack.dev.js',
    '!webpack.prod.js',
    '!**/coverage/**',
    '!**/assets/**',
    '!**/documentation/**',
    '!**/node_modules/**'
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