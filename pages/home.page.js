import {expect} from '@playwright/test';

exports.HomePage = class HomePage {
    /**
     * Initializes a new instance of the RegisterPage class.
     * 
     * @param {Object} page - The Playwright page object.
     */
    constructor(page) {
      this.page = page;

      this.home_link = this.page.getByRole('link', { name: ' Home' });
    }

    /**
     * Validates if the Home page is active by checking the color of the link.
     * 
     * @returns {Promise<void>} A promise that resolves when the validation is complete.
     */
    async validateHomePage() {
        // Check if the link for the Home page has the expected color
        // The color is in RGB format: rgb(255, 165, 0)
        await expect(this.home_link).toHaveCSS("color", "rgb(255, 165, 0)")
    }
}