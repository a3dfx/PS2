// @ts-ignore
const { jestConfig } = require("@salesforce/sfdx-lwc-jest/config");
module.exports = {
  parserOptions: {
    ecmaVersion: 9
  }
};
module.exports = {
  ...jestConfig,
  modulePathIgnorePatterns: ["<rootDir>/.localdevserver"]
};
