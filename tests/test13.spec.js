import { test, expect } from '@playwright/test';

test("Test Case 13: Verify Product quantity in Cart", async ({ page }) => {
    
    await test.step('Navigate to Automation Exercise Website', async () => {
        await page.goto('https://automationexercise.com/');
    });

    await test.step('Verify that home page is visible successfully', async () => {
        await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
    });

    await test.step('Click on View Product for any Product', async () => {
        await expect(page.locator('.choose > .nav > li > a').first()).toBeVisible();
        const linkElement = await page.locator('.choose > .nav > li > a').first();
        const Url = await linkElement.evaluate(el => el.href);
        console.log("URL:", Url);
        await page.locator('.choose > .nav > li > a').first().click();
        if (page.url().includes('google_vignette')) {
        await page.goto(Url);
        }
    });

    await test.step('Verify if product detail page is visible', async () => {
        await expect(page.locator("div[class='product-information'] h2")).toBeVisible();
        await expect(page.locator("div[class='product-information'] p:has-text('Category:')").first()).toBeVisible();
        await expect(page.locator("div[class='product-information'] span span:has-text('Rs.')")).toBeVisible();
        await expect(page.getByText('Availability:')).toBeVisible()
        await expect(page.getByText('Condition:')).toBeVisible()
        await expect(page.getByText('Brand:')).toBeVisible()
    });

    let quantity = "4";
    await test.step('Increase quantity to 4', async () => {
        await page.locator('#quantity').click();
        await page.locator('#quantity').clear();
        await page.locator('#quantity').fill(quantity);

    });

    await test.step("Click 'Add to cart' button", async () => {
        await page.getByRole('button', { name: ' Add to cart' }).click();
        await expect(page.locator('#cartModal')).toContainText('Added!');
        await expect(page.locator('#cartModal')).toContainText('Your product has been added to cart.');
        await expect(page.locator('#cartModal')).toContainText('Continue Shopping');
        
    });
    
    await test.step("Click 'View Cart' button", async () => {
        await expect(page.getByRole('link', { name: 'View Cart' })).toBeVisible();
        const linkElement = await page.getByRole('link', { name: 'View Cart' });
        const Url = await linkElement.evaluate(el => el.href);
        console.log("URL:", Url);
        await page.getByRole('link', { name: 'View Cart' }).click();
        if (page.url().includes('google_vignette')) {
        await page.goto(Url);
        }
    });

    await test.step('Verify if products are added to cart and validate the details of the product', async () => {
        await expect(page.locator(`#product-1 > .cart_price`)).toBeVisible();
        await expect(page.locator(`#product-1 > .cart_quantity > .disabled`)).toBeVisible();
        expect(await page.locator(`#product-1 > .cart_quantity > .disabled`).textContent()).toBe(quantity);
        await expect(page.locator(`#product-1 > .cart_total > .cart_total_price`)).toBeVisible();
    });

});

