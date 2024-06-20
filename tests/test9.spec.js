import { test, expect } from '@playwright/test';


test('Test Case 9: Search Product', async ({ page }) => {
    await test.step('Navigate to Automation Exercise Website', async () => {
        await page.goto('https://automationexercise.com/');
    });

    await test.step('Verify that home page is visible successfully', async () => {
        await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
    });

    await test.step('Click on Products Button and Handle Ads', async () => {
        const linkElement = await page.getByRole('link', { name: ' Products' });
        const Url = await linkElement.evaluate(el => el.href);
        console.log("URL:", Url);
        await page.getByRole('link', { name: ' Products' }).click();
        if (page.url().includes('google_vignette')) {
            await page.goto(Url);
        }
    });

    await test.step('Search for Product', async () => {
        await page.getByPlaceholder('Search Product').fill('Premium Polo T-Shirts');
        await page.getByRole('button', { name: '' }).click();
        
    });

    await test.step("Verify 'SEARCHED PRODUCTS' is visible", async () => {
        await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
        await expect(page.locator('body')).toContainText('Searched Products');
    });
    
    await test.step('Verify all the products related to search are visible', async () => {
        await expect(page.getByText('Premium Polo T-Shirts').first()).toBeVisible();
    });

});