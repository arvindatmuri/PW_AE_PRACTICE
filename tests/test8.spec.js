import { test, expect } from '@playwright/test';

test('Test Case 8: Verify All Products and product detail page', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
    const linkElement = await page.getByRole('link', { name: ' Products' });
    const Url = await linkElement.evaluate(el => el.href);
    console.log("URL:", Url);
    await page.getByRole('link', { name: ' Products' }).click();
    if (page.url().includes('google_vignette')) {
        await page.goto(Url);
    }
    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
    let list_of_products = await page.$$("css=.choose > .nav > li")
    console.log("List of Products:", list_of_products.length)
    
    expect(list_of_products.length).toBeGreaterThan(0);

    await page.locator("css=.choose > .nav > li > a").first().click();

    await expect(page.locator("div[class='product-information'] h2")).toBeVisible();
    
    await expect(page.locator("div[class='product-information'] p:has-text('Category:')").first()).toBeVisible();

    await expect(page.locator("div[class='product-information'] span span:has-text('Rs.')")).toBeVisible();

    await expect(page.getByText('Availability:')).toBeVisible()

    await expect(page.getByText('Condition:')).toBeVisible()

    await expect(page.getByText('Brand:')).toBeVisible()

       
});