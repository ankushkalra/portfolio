import { defineConfig } from "vitest/config";
import path from "node:path";

const root = import.meta.dirname;

export default defineConfig({
  oxc: { jsx: { runtime: "automatic" } },
  resolve: {
    alias: [
      // Parcel's "~/" project-root alias
      { find: /^~\//, replacement: root + "/" },
      // Parcel's "jsx:" SVG import prefix
      {
        find: /^jsx:.*\.svg$/,
        replacement: path.resolve(root, "__mocks__/svgMock.js"),
      },
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
