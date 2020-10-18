const { join } = require('path');

module.exports = {
  rootDir: join(__dirname, '..'),
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/**/*.ts'],
};
