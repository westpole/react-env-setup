module.exports = {
  testRegex: 'spec\\.(tsx?|jsx?)$',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/tools/',
  ],
  setupFiles: ['<rootDir>/__mocks__/browserMocks.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverage: true,
  coverageDirectory: './reports/coverage',
  coverageReporters: ['html', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!tools/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      babelConfig: {
        presets: ['@babel/env'],
      },
    },
  },
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    'Root(.*)$': '<rootDir>/src/application/$1',
    'Assets(.*)$': '<rootDir>/src/assets/$1',
    'Store(.*)$': '<rootDir>/src/store/$1',
    'Config(.*)$': '<rootDir>/src/config/$1',
    'Services(.*)$': '<rootDir>/src/services/$1',
  },
};
