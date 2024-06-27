import { test, expect } from '@playwright/test';

test('Visual test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page).toHaveScreenshot();
});