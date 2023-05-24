/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  bail: true,
  testEnvironment: "node",
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
