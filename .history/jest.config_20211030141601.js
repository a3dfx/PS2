// @ts-ignore
const { jestConfig } = require("@salesforce/sfdx-lwc-jest/config");
module.exports = {};
module.exports = {
  parserOptions: {
    ecmaVersion: 6
  },
  ...jestConfig,
  modulePathIgnorePatterns: ["<rootDir>/.localdevserver"]
};
