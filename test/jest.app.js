const { join } = require('path');
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./../tsconfig');

module.exports = {
  rootDir: join(__dirname, '..'),
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  displayName: 'app',
};
