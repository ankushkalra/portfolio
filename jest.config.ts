export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
    "^jsx:(.*\\.svg)$": "<rootDir>/__mocks__/svgMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootdir>/__mocks__/fileMock.js",
  },
};
