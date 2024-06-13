import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.step('Navigate to Automation Exercise Website', async () => {
        await page.goto('https://automationexercise.com/');
    });

    test.step('Verify that home page is visible successfully', async () => {
        await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
    });

    test.step('Click on Products Link', async () => {
        await page.getByRole('link', { name: ' Products' }).click();
    });
    
    
    test.step('Add First Product', async () => {
        await page.hover('.productinfo > .btn');
        await page.locator('.overlay-content > .btn').first().click();
    });

    test.step('Verify if Product added Successfully', async () => {
        await expect(page.getByText('')).toBeVisible();
        await page.getByText('Your product has been added').click();
        await expect(page.getByRole('link', { name: 'View Cart' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
        
    });

    test.step('Add Second Product', async () => {
        await page.hover(page.locator('.productinfo > .btn').nth(1));
        await page.locator('.overlay-content > .btn').nth(1).click();
    });

    test.step('Verify if Product added Successfully', async () => {
        await expect(page.getByText('')).toBeVisible();
        await page.getByText('Your product has been added').click();
        await expect(page.getByRole('link', { name: 'View Cart' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
        
    });

    test.step('Click on Cart', async () => {
        await page.getByRole('link', { name: ' Cart' }).click();
    });
  
  
  await expect(page.locator('#product-1')).toContainText('Blue Top');
  await expect(page.locator('#product-1')).toContainText('Rs. 500');
  await expect(page.locator('#product-1')).toContainText('Rs. 500');
});