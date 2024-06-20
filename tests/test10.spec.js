import { test, expect } from '@playwright/test';
import jdata from '../data.json';

test('Test Case 10: Test Case 10: Verify Subscription in home page', async ({ page }) => {
    await test.step('Navigate to Automation Exercise Website', async () => {
        await page.goto('https://automationexercise.com/');
    });

    await test.step('Verify that home page is visible successfully', async () => {
        await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
    });

    await test.step("Verify text 'SUBSCRIPTION'", async () => {
        await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();
        await expect(page.locator('#footer')).toContainText('Subscription');
    });

    await test.step("Verify Email address in input and Verify arrow button", async () => {
        await expect(page.getByPlaceholder('Your email address')).toBeVisible();
        await expect(page.getByRole('button', { name: '' })).toBeVisible();
        await expect(page.locator('form')).toContainText('Get the most recent updates from our site and be updated your self...');
    });

    await test.step("Enter email address in input and click arrow button", async () => {
        await page.getByPlaceholder('Your email address').fill(jdata.email);
        await page.getByRole('button', { name: '' }).click();
    });

    await test.step("Verify success message 'You have been successfully subscribed!' is visible", async () => {
        await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();
    });

});