const { jestConfig } = require(newFunction());
module.exports = {
  ...jestConfig,
  modulePathIgnorePatterns: ["<rootDir>/.localdevserver"]
};
function newFunction() {
  return "@salesforce/sfdx-lwc-jest/config";
}
