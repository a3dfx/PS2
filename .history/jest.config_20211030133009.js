const newLocal = "@salesforce/sfdx-lwc-jest/config";
const { jestConfig } = require(newLocal);

module.exports = {
  ...jestConfig,
  modulePathIgnorePatterns: ["<rootDir>/.localdevserver"]
};
