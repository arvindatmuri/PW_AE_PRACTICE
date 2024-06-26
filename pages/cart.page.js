import {expect} from '@playwright/test';
exports.CartPage = class CartPage {
 
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

      this.cartButton = this.page.getByRole('link', { name: ' Cart' });
      this.proceedToCheckoutButton = this.page.getByText('Proceed To Checkout');
      this.checkoutModalImage = this.page.getByText('');
      this.checkOutModalName = this.page.getByRole('heading', { name: 'Checkout' });
      this.checkoutModalRegisterLabel = this.page.getByText('Register / Login account to');
      this.checkoutModalRegisterLink = this.page.getByRole('link', { name: 'Register / Login' });
      this.checkOutModalCheckoutToCartButton = this.page.getByRole('button', { name: 'Continue On Cart' });

    }

    /**
     * Clicks on the cart button to navigate to the cart page.
     *
     * @return {Promise<void>} A Promise that resolves when the cart button is clicked.
     */
    async clickOnCartButton() {
      // Click on the cart button to navigate to the cart page.
      // The cart button is represented by the 'Cart' button role.
      await this.cartButton.click();
    } 

    /**
     * Validates if the cart page is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the cart page is visible.
     */
    async validateCartPage() {
      // Use the expect function from the Playwright test framework to check if the cart page is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      // The color property of the cart button is checked to see if it matches the expected color.
      // The color is specified as an RGB value.
      await expect(this.cartButton).toHaveCSS("color", "rgb(255, 165, 0)"); // Assert that the cart button has the expected color.
    }

    /**
     * Validates if the 'Proceed To Checkout' button is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the 'Proceed To Checkout' button is visible.
     */
    async validateProceedToCheckoutButton() {
      // Use the expect function from the Playwright test framework to check if the 'Proceed To Checkout' button is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      expect(this.proceedToCheckoutButton).toBeVisible(); // Assert that the 'Proceed To Checkout' button is visible.
    }

    /**
     * Clicks on the 'Proceed To Checkout' button to proceed to the checkout page.
     *
     * @return {Promise<void>} A Promise that resolves when the 'Proceed To Checkout' button is clicked.
     */
    async clickOnProceedToCheckoutButton() {
      // Click on the 'Proceed To Checkout' button to proceed to the checkout page.
      // The 'Proceed To Checkout' button is represented by its text content.
      await this.proceedToCheckoutButton.click();
    }

    /**
     * Validates if the checkout modal is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the checkout modal is visible.
     */
    async validateCheckoutModal() {
      // Validate if the checkout modal image is visible.
      expect(this.checkoutModalImage).toBeVisible();

      // Validate if the checkout modal name is visible.
      expect(this.checkOutModalName).toBeVisible();

      // Validate if the checkout modal register label is visible.
      expect(this.checkoutModalRegisterLabel).toBeVisible();

      // Validate if the checkout modal register link is visible.
      expect(this.checkoutModalRegisterLink).toBeVisible();

      // Validate if the checkout modal 'Continue On Cart' button is visible.
      expect(this.checkOutModalCheckoutToCartButton).toBeVisible();
    }

    /**
     * Clicks on the 'Register/Login' link in the checkout modal.
     *
     * @return {Promise<void>} A Promise that resolves when the 'Register/Login' link is clicked.
     */
    async clickOnRegisterOrLoginLink() {
      // Click on the 'Register/Login' link in the checkout modal.
      // The 'Register/Login' link is represented by its text content.
      await this.checkoutModalRegisterLink.click();
    }
}