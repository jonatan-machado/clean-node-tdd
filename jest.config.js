module.exports = {
  bail: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
};
