module.exports = {
  collectCoverageFrom: ['**/src/**/*.ts'],
  coverageThreshold: {
    // Change the threshold as the coverage grows
    global: { statements: 30, branches: 20, functions: 30, lines: 30 },
    // Add per glob coverage threshold here
  },
  projects: ['./test/jest.app.js', './test/jest.lint.js'],
  watchPlugins: ['jest-watch-select-projects'],
};
