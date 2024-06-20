import { test, expect } from '@playwright/test';

test('Test Case 12: Add Products in Cart', async ({ page }) => {
    await test.step('Navigate to Automation Exercise Website', async () => {
        await page.goto('https://automationexercise.com/');
    });

    await test.step('Verify that home page is visible successfully', async () => {
        await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
    });

    await test.step('Click on Products Link and Handle Ads', async () => {
        const linkElement = await page.getByRole('link', { name: ' Products' });
        const Url = await linkElement.evaluate(el => el.href);
        console.log("URL:", Url);
        await page.getByRole('link', { name: ' Products' }).click();
        if (page.url().includes('google_vignette')) {
            await page.goto(Url);
        }
    });
    
    
    await test.step('Add First Product', async () => {
        await page.locator('.productinfo > .btn').first().hover();
        await page.locator('.overlay-content > .btn').first().click();
    });

    await test.step('Verify if Product added Successfully', async () => {
        await expect(page.getByText('')).toBeVisible();
        await expect(page.getByText('Your product has been added')).toBeVisible();
        await expect(page.getByRole('link', { name: 'View Cart' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        
    });

    await test.step('Add Second Product', async () => {
        await page.locator('.productinfo > .btn').nth(1).hover();
        await page.locator('.overlay-content > .btn').nth(1).click();
    });

    await test.step('Verify if Product added Successfully', async () => {
        await expect(page.getByText('')).toBeVisible();
        await expect(page.getByText('Your product has been added')).toBeVisible();
        await expect(page.getByRole('link', { name: 'View Cart' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        
    });

    await test.step('Click on Cart', async () => {
        await page.getByRole('link', { name: ' Cart' }).click();
    });
  
  
//   await expect(page.locator('#product-1')).toContainText('Blue Top');
//   await expect(page.locator('#product-1')).toContainText('Rs. 500');
//   await expect(page.locator('#product-1')).toContainText('Rs. 500');
});