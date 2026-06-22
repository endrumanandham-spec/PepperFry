import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',   // 👈 This tells Playwright to use Microsoft Edge
      },
    },
  ],
});
