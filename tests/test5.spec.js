import { test, expect } from '@playwright/test';

test('Test Case 5: Register User with existing email', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('Tester123');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('tester123@gmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    await page.getByText('Email Address already exist!').click();
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
  });