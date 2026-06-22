import { defineConfig } from '@playwright/test';

// Helper to load environment config
function getEnvConfig(envName: string) {
  return require(`./config/${envName}.env.ts`).default;
}

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report' }]
  ],

  // Define projects for each environment + browser
  projects: [
    {
      name: 'dev-chromium',
      use: {
        browserName: 'chromium',
        baseURL: getEnvConfig('dev').baseURL,
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
      },
    },
    {
      name: 'dev-firefox',
      use: {
        browserName: 'firefox',
        baseURL: getEnvConfig('dev').baseURL,
      },
    },
    {
      name: 'dev-webkit',
      use: {
        browserName: 'webkit',
        baseURL: getEnvConfig('dev').baseURL,
      },
    },
    {
      name: 'staging-chromium',
      use: {
        browserName: 'chromium',
        baseURL: getEnvConfig('staging').baseURL,
      },
    },
    {
      name: 'staging-firefox',
      use: {
        browserName: 'firefox',
        baseURL: getEnvConfig('staging').baseURL,
      },
    },
    {
      name: 'staging-webkit',
      use: {
        browserName: 'webkit',
        baseURL: getEnvConfig('staging').baseURL,
      },
    },
    {
      name: 'prod-chromium',
      use: {
        browserName: 'chromium',
        baseURL: getEnvConfig('prod').baseURL,
      },
    },
    {
      name: 'prod-firefox',
      use: {
        browserName: 'firefox',
        baseURL: getEnvConfig('prod').baseURL,
      },
    },
    {
      name: 'prod-webkit',
      use: {
        browserName: 'webkit',
        baseURL: getEnvConfig('prod').baseURL,
      },
    },
  ],
});
