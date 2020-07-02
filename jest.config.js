module.exports = {
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
    'src/scripts/**/*.{ts,tsx}',
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
    'Components(.*)$': '<rootDir>/src/scripts/application/components/$1',
    'Assets(.*)$': '<rootDir>/src/scripts/assets/$1',
    'Store(.*)$': '<rootDir>/src/scripts/store/$1',
    'Config(.*)$': '<rootDir>/src/scripts/config/$1',
    'Services(.*)$': '<rootDir>/src/scripts/services/$1',
    'TestTools(.*)$': '<rootDir>/tools/test-utils/$1',
  },
};
