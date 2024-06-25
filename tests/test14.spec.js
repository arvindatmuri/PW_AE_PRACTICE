const { RegisterPage } = require('../pages/register.page');
import { test, expect } from '@playwright/test';

test("Test Case 14: Place Order: Register while Checkout", async ({ page }) => {
    const registerPage = new RegisterPage(page);
    
    await test.step('Navigate to Automation Exercise Website', async () => {
        await page.goto('https://automationexercise.com/');
    });

    await test.step('Verify that home page is visible successfully', async () => {
        await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
    });

});