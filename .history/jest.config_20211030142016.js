const newLocal = "@salesforce/sfdx-lwc-jest/config";
const { jestConfig } = require(newLocal);
const { jestConfig } = require("@salesforce/sfdx-lwc-jest/config");
module.exports = {
  parserOptions: {
    ecmaVersion: 6
  },
  ...jestConfig,
  modulePathIgnorePatterns: ["<rootDir>/.localdevserver"]
};
