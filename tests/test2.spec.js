import { test, expect } from '@playwright/test';
import jdata from '../data.json';


test("Test Case 2: Login User with correct email and password", async ({page}) => {
  await page.goto("https://automationexercise.com/");
  await expect(
    page.getByRole("link", { name: "Website for automation" })
  ).toBeVisible();
  await page.getByRole("link", { name: " Signup / Login" }).click();
  await expect(
    page.getByRole("heading", { name: "New User Signup!" })
  ).toBeVisible();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(jdata.email);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#header')).toContainText('Logged in as');
});
