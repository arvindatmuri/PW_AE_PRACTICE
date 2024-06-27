import {expect} from '@playwright/test';
exports.CheckoutPage = class CheckoutPage {
    constructor(page){
        this.page = page;

        this.addressHeading = page.getByRole('heading', { name: 'Checkout: Your Address' });

    }

    /**
     * Asynchronously validates that the address heading is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the address heading is visible.
     */
    async validateAddressHeading() {
        // Use the expect function from the Playwright test framework to check if the address heading is visible.
        // The expect function returns a Promise that resolves when the assertion is true.
        await expect(this.addressHeading).toBeVisible(); // Assert that the address heading is visible.
    }
}