const jestConfig = {
  // The root directory for your tests
  roots: ['<rootDir>/tests'],

  // Test environment (e.g., "node" or "jsdom" for browser-like environment)
  testEnvironment: 'node',

  // File extensions to look for when running tests
  moduleFileExtensions: ['js', 'mjs'],

  // Patterns for matching test files
  testMatch: ['__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // Transform module files (e.g., Babel for ES6+ support)
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};

export default jestConfig
