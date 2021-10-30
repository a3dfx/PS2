const { jestConfig } = require("@salesforce/sfdx-lwc-jest/config");
module.exports = {
  parserOptions: {
    ecmaVersion: 9
  },
  ...jestConfig,
  modulePathIgnorePatterns: ["<rootDir>/.localdevserver"]
};
