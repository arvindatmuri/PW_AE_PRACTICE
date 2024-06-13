import { test, expect } from "@playwright/test";

test("Test Case 7: Verify Test Cases Page", async ({ page }) => {
await page.goto('https://automationexercise.com/');
await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
await page.getByRole('link', { name: ' Test Cases' }).click();
await expect(page.locator('b')).toBeVisible();
await expect(page.locator('b')).toHaveCSS("color","rgb(254, 152, 15)")
await expect(page.locator('span')).toContainText('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:');
await expect(page.locator('span')).toHaveCSS("color","rgb(255,0,0)")
});