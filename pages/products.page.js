import {expect} from '@playwright/test';
exports.ProductsPage = class ProductsPage {
 
    /**
     * Constructs a new LoginPage object.
     *
     * @param {page} page - The Playwright Page object representing the page under test.
     */
    constructor(page) {
      /**
       * The Playwright Page object representing the page under test.
       * @type {page}
       */
      this.page = page;

      this.productInfo = this.page.locator('.productinfo > .btn');
      this.productOverlay = this.page.locator('.productinfo > .btn');
      this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });
      this.productAddedMessage = this.page.getByText('Your product has been added');
      this.greenTick = this.page.getByText('');
      this.viewCartButton = this.page.getByRole('link', { name: 'View Cart' });
    }
    /**
     * Adds the first product to the cart by hovering over its info button and clicking its overlay button.
     *
     * @return {Promise<void>} A Promise that resolves when the first product is added to the cart.
     */
    async addFirstProduct() {
      // Hover over the first product info button
      await this.productInfo.first().hover();

      // Click on the first product overlay button
      await this.productOverlay.first().click();
      
      // Validate the continue shopping button is visible
      await this.validateContinueShoppingButton();

      // Click on the continue shopping button
      await this.continueShoppingButton.click();
    }

    /**
     * Validates if the continue shopping button is visible on the page.
     * 
     * @return {Promise<void>} A Promise that resolves when the continue shopping button is visible.
     */
    async validateContinueShoppingButton() {
      // Use the expect function from the Playwright test framework to check if the continue shopping button is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      await expect(this.continueShoppingButton).toBeVisible(); // Assert that the continue shopping button is visible.
      
    }

    /**
     * Validates if the product added message is visible on the page.
     * 
     * @return {Promise<void>} A Promise that resolves when the product added message is visible.
     */
    async validateProductAddedMessage() {
      // Use the expect function from the Playwright test framework to check if the product added message is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      // The await keyword is used to wait for the Promise to resolve before proceeding.
      await expect(this.productAddedMessage).toBeVisible(); // Assert that the product added message is visible.
    }

    /**
     * Validates if the green tick is visible on the page.
     * 
     * @return {Promise<void>} A Promise that resolves when the green tick is visible.
     */
    async validateGreenTick() {
      // Use the expect function from the Playwright test framework to check if the green tick is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      // The await keyword is used to wait for the Promise to resolve before proceeding.
      await expect(this.greenTick).toBeVisible(); // Assert that the green tick is visible.
    }

    /**
     * Validates if the view cart button is visible on the page.
     * 
     * @return {Promise<void>} A Promise that resolves when the view cart button is visible.
     */
    async validateViewCartButton() {
      // Use the expect function from the Playwright test framework to check if the view cart button is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      await expect(this.viewCartButton).toBeVisible(); // Assert that the view cart button is visible.
    }

    /**
     * Adds a product to the cart based on the given index.
     *
     * @param {number} index - The index of the product to add. Index starts from 1.
     */
    async addProduct(index) {
      // Hover over the product info button of the specified index
      // The index provided is 1-based, so we subtract 1 to get the correct nth element.
      await this.productInfo.nth(index-1).hover();

      // Click on the product overlay button of the specified index
      await this.productOverlay.nth(index-1).click();

      // Validate that the green tick and product added message are visible
      await this.validateGreenTick();
      await this.validateProductAddedMessage();

      // Validate that the view cart button is visible
      await this.validateViewCartButton();

      // Validate that the continue shopping button is visible
      await this.validateContinueShoppingButton();

      // Click on the continue shopping button
      await this.continueShoppingButton.click();
    }
}