import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
const envConfig = require(`../config/${process.env.TEST_ENV || "dev"}.env.ts`).default;

test('login works in selected environment', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto(envConfig.baseURL);
  await loginPage.gotoLogin();
  await loginPage.login(envConfig.username, envConfig.password);
  await expect(loginPage.welcomeMessage).toHaveText(/Welcome/);
});
