const jestConfig = "@salesforce/sfdx-lwc-jest/config";
module.exports = {
  parserOptions: {
    ecmaVersion: 6
  },
  ...jestConfig,
  modulePathIgnorePatterns: ["<rootDir>/.localdevserver"]
};
