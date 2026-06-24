import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
const envConfig = require(`../config/${process.env.TEST_ENV || "dev"}.env.ts`).default;

test('login works in selected environment', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto(envConfig.baseURL);
  //await loginPage.gotoLogin();
  //await loginPage.login(envConfig.username, envConfig.password);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(10000);
  const loginPopup= await page.locator('#modal-body');
  //await loginPopup.waitFor({ state: 'visible' });
  await expect(page.getByRole('button', { name: 'CONTINUE' })).toBeVisible();
  await page.waitForTimeout(10000);

  
  //await loginPopup.locator('[data-test="pepperfryLogo"]').click();
  /*await expect(page.locator('pf-header-icons')).toContainText('Hi, *');
  await page.getByRole('link', { name: 'My Profile' }).click();
  await expect(page.locator('pf-my-details')).toContainText('My Details');
  await expect(page.locator('pf-default-address')).toContainText('Default Address');
  await expect(page.locator('pf-my-account-menus')).toContainText('My Orders');
  */
});
