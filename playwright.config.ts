import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 90 * 1000,  
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
        channel: 'chromium',   // 👈 This tells Playwright to use Chromium
      },
    },
  ],
});
