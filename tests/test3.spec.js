import { test, expect } from '@playwright/test';

test('Test Case 3: Login User with incorrect email and password', async ({page}) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
    await page.getByRole("link", { name: " Signup / Login" }).click();
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('tester123@gmail.com');
    await page.getByPlaceholder('Password').fill('tester');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('#form')).toContainText('Your email or password is incorrect!');
});