import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [["html"], ["github"]] : "list",
  use: {
    baseURL: "http://localhost:1234",
    trace: "on-first-retry",
  },
  webServer: {
    command: "pnpm build && pnpm exec serve dist -l 1234",
    url: "http://localhost:1234",
    reuseExistingServer: !process.env.CI,
  },
});
