module.exports = {
  collectCoverageFrom: ['**/src/**/*.ts'],
  coverageThreshold: {
    // Change the threshold as the coverage grows
    global: { statements: 30, branches: 30, functions: 30, lines: 30 },
    // Add per glob coverage threshold here
  },
  projects: ['./jest.app.js', './jest.lint.js'],
  watchPlugins: ['jest-watch-select-projects'],
};
