import { test, expect } from '@playwright/test';

test("Test Case 4: Logout User", async ({page}) => {
  await page.goto("https://automationexercise.com/");
  await expect(
    page.getByRole("link", { name: "Website for automation" })
  ).toBeVisible();
  await page.getByRole("link", { name: " Signup / Login" }).click();
  await expect(
    page.getByRole("heading", { name: "Login to your account" })
  ).toBeVisible();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('Giuseppe38@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#header')).toContainText('Logged in as');
  await page.getByRole('link', { name: ' Logout' }).click();
  await expect(page.locator('#form')).toContainText('Login to your account');
});
