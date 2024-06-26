import {expect} from '@playwright/test';
exports.LoginPage = class LoginPage {
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

      this.signupHeading = page.getByRole('heading', { name: 'New User Signup!' });
      this.signupNameInput = page.getByPlaceholder('Name');
      this.signupEmailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
      this.signupSubmitButton = page.getByRole('button', { name: 'Signup' });
      
      this.loginHeading = page.getByRole('heading', { name: 'Login to your account' });
      this.loginEmailInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
      this.loginPasswordInput = page.getByPlaceholder('Password');
      this.loginSubmitButton = page.getByRole('button', { name: 'Login' });
    }

    /**
     * Asynchronously validates that the login heading is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the login heading is visible.
     */
    async validateLoginHeading() {  
      // Use the expect function from the Playwright test framework to check if the login heading is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      await expect(this.loginHeading).toBeVisible(); 
    }

    /**
     * Asynchronously validates that the signup heading is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the signup heading is visible.
     */
    async validateSignupHeading() {
      // Use the expect function from the Playwright test framework to check if the signup heading is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      await expect(this.signupHeading).toBeVisible(); // Assert that the signup heading is visible.
    }

    /**
     * Asynchronously validates that the signup name input is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the signup name input is visible.
     */
    async validateSignupNameInput() { 
      // Use the expect function from the Playwright test framework to check if the signup name input is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      await expect(this.signupNameInput).toBeVisible(); // Assert that the signup name input is visible.
    }

    /**
     * Asynchronously validates that the signup email input is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the signup email input is visible.
     */
    async validateSignupEmailInput() { 
      // Use the expect function from the Playwright test framework to check if the signup email input is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      await expect(this.signupEmailInput).toBeVisible(); // Assert that the signup email input is visible.
    }

    /**
     * Asynchronously validates that the signup submit button is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the signup submit button is visible.
     */
    async validateSignupSubmitButton() {
      // Use the expect function from the Playwright test framework to check if the signup submit button is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      await expect(this.signupSubmitButton).toBeVisible(); // Assert that the signup submit button is visible.
    }

    /**
     * Asynchronously validates that the login email input is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the login email input is visible.
     */
    async validateLoginEmailInput() {
      // Use the expect function from the Playwright test framework to check if the login email input is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      await expect(this.loginEmailInput).toBeVisible(); // Assert that the login email input is visible.
    }

    /**
     * Asynchronously validates that the login password input is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the login password input is visible.
     */
    async validateLoginPasswordInput() {
      // Use the expect function from the Playwright test framework to check if the login password input is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      await expect(this.loginPasswordInput).toBeVisible(); // Assert that the login password input is visible.
    }

    /**
     * Asynchronously validates that the login submit button is visible on the page.
     *
     * @return {Promise<void>} A Promise that resolves when the login submit button is visible.
     */
    async validateLoginSubmitButton() {
      // Use the expect function from the Playwright test framework to check if the login submit button is visible.
      // The expect function returns a Promise that resolves when the assertion is true.
      await expect(this.loginSubmitButton).toBeVisible(); // Assert that the login submit button is visible.
    }

    /**
     * Asynchronously clicks the signup submit button.
     *
     * @return {Promise<void>} A Promise that resolves when the signup submit button is clicked.
     */
    async clickSignupSubmitButton() {
      // Use the click function from the Playwright test framework to click the signup submit button.
      // The click function returns a Promise that resolves when the button is clicked.
      await this.signupSubmitButton.click(); // Click the signup submit button.
    }

    /**
     * Asynchronously fills the login email input with the provided email.
     *
     * @param {string} email - The email to fill into the login email input.
     * @return {Promise<void>} A Promise that resolves when the login email input is filled.
     */
    async fillLoginEmailInput(email) {
      // Use the fill function from the Playwright test framework to fill the login email input with the provided email.
      // The fill function returns a Promise that resolves when the input is filled.
      await this.loginEmailInput.fill(email); // Fill the login email input with the provided email.
    }

    /**
     * Asynchronously fills the login password input with the provided password.
     *
     * @param {string} password - The password to fill into the login password input.
     * @return {Promise<void>} A Promise that resolves when the login password input is filled.
     */
    async fillLoginPasswordInput(password) {
      // Use the fill function from the Playwright test framework to fill the login password input with the provided password.
      // The fill function returns a Promise that resolves when the input is filled.
      await this.loginPasswordInput.fill(password); // Fill the login password input with the provided password.
    }

    /**
     * Asynchronously clicks the login submit button.
     *
     * @return {Promise<void>} A Promise that resolves when the login submit button is clicked.
     */
    async clickLoginSubmitButton() {
      // Click the login submit button.
      // The click function returns a Promise that resolves when the button is clicked.
      await this.loginSubmitButton.click();
    }

    /**
     * Asynchronously fills the signup name input with the provided name.
     *
     * @param {string} name - The name to fill into the signup name input.
     * @return {Promise<void>} A Promise that resolves when the signup name input is filled.
     */
    async fillSignupNameInput(name) {
      // Use the fill function from the Playwright test framework to fill the signup name input with the provided name.
      // The fill function returns a Promise that resolves when the input is filled.
      await this.signupNameInput.fill(name); // Fill the signup name input with the provided name.
    }

    /**
     * Asynchronously fills the signup email input with the provided email.
     *
     * @param {string} email - The email to fill into the signup email input.
     * @return {Promise<void>} A Promise that resolves when the signup email input is filled.
     */
    async fillSignupEmailInput(email) {
      // Use the fill function from the Playwright test framework to fill the signup email input with the provided email.
      // The fill function returns a Promise that resolves when the input is filled.
      await this.signupEmailInput.fill(email); // Fill the signup email input with the provided email.
    }

    /**
     * Asynchronously logs in with the provided email and password.
     *
     * @param {string} email - The email to fill into the login email input.
     * @param {string} password - The password to fill into the login password input.
     * @return {Promise<void>} A Promise that resolves when the login submit button is clicked.
     */
    async login(email, password) {
      // Validate that the login heading is visible on the page.
      await this.validateLoginHeading();

      // Validate if visible on the page and fill the login email input.
      await this.validateLoginEmailInput();
      await this.fillLoginEmailInput(email);

      // Validate if visible on the page and fill the login password input.
      await this.validateLoginPasswordInput();
      await this.fillLoginPasswordInput(password);

      // Validate if visible on the page and click the login submit button.
      await this.validateLoginSubmitButton();
      await this.clickLoginSubmitButton();
    }

    /**
     * Asynchronously signs up with the provided name and email.
     *
     * @param {string} name - The name to fill into the signup name input.
     * @param {string} email - The email to fill into the signup email input.
     * @return {Promise<void>} A Promise that resolves when the signup submit button is clicked.
     */
    async signUpNewUser(name, email) {
      // Validate that the signup heading is visible on the page.
      await this.validateSignupHeading();
      
      // Validate if visible on the page and fill the signup name input .
      await this.validateSignupNameInput();
      await this.fillSignupNameInput(name);

      // Validate if visible on the page and fill the signup email input.
      await this.validateSignupEmailInput();
      await this.fillSignupEmailInput(email);

      // validate if visible on the page and click the signup submit button.
      await this.validateSignupSubmitButton();
      await this.clickSignupSubmitButton();
    }

}