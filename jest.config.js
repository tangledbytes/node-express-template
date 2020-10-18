module.exports = {
  collectCoverageFrom: ['**/src/**/*.ts'],
  coverageThreshold: {
    // Change the threshold as the coverage grows
    global: { statements: 10, branches: 2, functions: 10, lines: 10 },
    // Add per glob coverage threshold here
  },
  projects: ['./test/jest.app.js', './test/jest.lint.js'],
  watchPlugins: ['jest-watch-select-projects'],
};
