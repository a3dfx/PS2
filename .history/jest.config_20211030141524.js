// @ts-ignore
const { jestConfig } = require("@salesforce/sfdx-lwc-jest/config");
module.exports = {
  parserOptions: {
    ecmaVersion: 6
  }
};
module.exports = {
  ...jestConfig,
  modulePathIgnorePatterns: ["<rootDir>/.localdevserver"]
};
