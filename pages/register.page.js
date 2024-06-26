import {expect} from '@playwright/test';
exports.RegisterPage = class RegisterPage {
    /**
     * Initializes a new instance of the RegisterPage class.
     * 
     * @param {Object} page - The Playwright page object.
     */
    constructor(page) {
      this.page = page;

      this.registerPageHeading = this.page.getByText('Enter Account Information');
      this.registerPageLink = this.page.getByRole('link', { name: ' Signup / Login' });
      
      this.titleElement = this.page.getByText('Title');
      this.titleMr = this.page.getByText('Mr.');
      this.titleMrs = this.page.getByText('Mrs.');
      
      this.nameLabel = this.page.getByText('Name *', { exact: true });
      this.nameInput = this.page.getByLabel('Name *', { exact: true });
      
      this.emailLabel = this.page.getByText('Email *');
      this.emailInput = this.page.getByLabel('Email *', { exact: true });
      
      this.passwordLabel = this.page.getByText('Password *');
      this.passwordField = this.page.getByLabel('Password *');
      
      this.registerButton = this.page.getByRole('button', { name: 'Register' });
      
      this.dateOfBirthLabel = this.page.getByText('Date of Birth');
      this.dateOfBirthDaySelect = this.page.locator('#days');
      this.dateOfBirthMonthSelect = this.page.locator('#months');
      this.dateOfBirthYearSelect = this.page.locator('#years');
      
      this.newsletterCheckbox = this.page.getByLabel('Sign up for our newsletter!');
      this.newsletterCheckboxText = this.page.getByText('Sign up for our newsletter!');
      this.specialOffersCheckbox = this.page.getByLabel('Receive special offers from');
      this.specialOffersCheckboxText = this.page.getByText('Receive special offers from');
      
      this.addressInformationLabel = this.page.getByText('Address Information');
      
      this.firstNameLabel = this.page.getByText('First name *');
      this.firstNameInput = this.page.getByLabel('First name *');
      
      this.lastNameLabel = this.page.getByText('Last name *');
      this.lastNameInput = this.page.getByLabel('Last name *');
      
      this.companyLabel = this.page.getByText('Company', { exact: true });
      this.companyInput = this.page.getByLabel('Company', { exact: true });
      
      this.addressLine1Label = this.page.getByText('Address * (Street address, P.');
      this.addressLine1Input = this.page.getByLabel('Address * (Street address, P.');
      
      this.addressLine2Label = this.page.getByText('Address 2');
      this.addressLine2Input = this.page.getByLabel('Address 2');
      
      this.countryLabel = this.page.getByText('Country *');
      this.countryInput = this.page.getByLabel('Country *');
      
      this.stateLabel = this.page.getByText('State *');
      this.stateInput = this.page.getByLabel('State *');
      
      this.cityLabel = this.page.getByText('City *');
      this.cityInput = this.page.getByLabel('City *');
      
      this.zipCodeLabel = this.page.getByText('Zipcode *');
      this.zipCodeInput = this.page.locator('#zipcode');
      
      this.mobileNumberLabel = this.page.getByText('Mobile Number *');
      this.mobileNumberInput = this.page.getByLabel('Mobile Number *');
    }

    async validateRegistrationPage() {
      await expect(this.registerPageHeading).toBeVisible();
    }

    async enterFirstName(firstName) {
      await this.firstNameField.fill(firstName)
    }

    async validateTitle() {
      await expect(this.titleElement).toBeVisible();
      await expect(this.titleMr).toBeVisible();
      await expect(this.titleMrs).toBeVisible();
    }

    async validateNameField() {
      await expect(this.nameLabel).toBeVisible();
      await expect(this.nameInput).toBeVisible();
    }

    async validateNameValue(name){
      await expect(this.nameInput).toHaveValue(name);
    }

    async validateEmailValue(email) {
      await expect(this.emailInput).toHaveValue(email);
    }

    async validateEmailField() {
      await expect(this.emailLabel).toBeVisible();
      await expect(this.emailInput).toBeVisible();
    }

    async validatePasswordField() {
      await expect(this.passwordLabel).toBeVisible();
      await expect(this.passwordField).toBeVisible();
    }

    async validateDateOfBirth() {
      await expect(this.dateOfBirthLabel).toBeVisible();
      await expect(this.dateOfBirthDaySelect).toBeVisible();
      await expect(this.dateOfBirthMonthSelect).toBeVisible();
      await expect(this.dateOfBirthYearSelect).toBeVisible();
    }

    async validateNewsletter() {
      await expect(this.newsletterCheckbox).toBeVisible();
      await expect(this.newsletterCheckboxText).toBeVisible();
    }

    async validateSpecialOffers() {
      await expect(this.specialOffersCheckbox).toBeVisible();
      await expect(this.specialOffersCheckboxText).toBeVisible();
    }

    async validateFirstName() {
      await expect(this.firstNameLabel).toBeVisible();
      await expect(this.firstNameInput).toBeVisible();
    }

    async validateLastName() {
      await expect(this.lastNameLabel).toBeVisible();
      await expect(this.lastNameInput).toBeVisible();
    }

    async validateCompany() {
      await expect(this.companyLabel).toBeVisible();
      await expect(this.companyInput).toBeVisible();
    }

    async validateAddress() {
      await expect(this.addressLine1Label).toBeVisible();
      await expect(this.addressLine1Input).toBeVisible();

      await expect(this.addressLine2Label).toBeVisible();
      await expect(this.addressLine2Input).toBeVisible();

      await expect(this.countryLabel).toBeVisible();
      await expect(this.countryInput).toBeVisible();

      await expect(this.stateLabel).toBeVisible();
      await expect(this.stateInput).toBeVisible();

      await expect(this.cityLabel).toBeVisible();
      await expect(this.cityInput).toBeVisible();

      await expect(this.zipCodeLabel).toBeVisible();
      await expect(this.zipCodeInput).toBeVisible();

    }

    async validateMobileNumber() {
      await expect(this.mobileNumberLabel).toBeVisible();
      await expect(this.mobileNumberInput).toBeVisible();
    }

    async validateRegistrationPageForm() {
      await this.validateRegistrationPage();
      await this.validateTitle();
      await this.validateNameField();
      await this.validateEmailField();
      await this.validatePasswordField();
      await this.validateNewsletter();
      await this.validateSpecialOffers();
      await this.validateDateOfBirth();
      await this.validateFirstName();
      await this.validateLastName();
      await this.validateCompany();
      await this.validateAddress();
      await this.validateMobileNumber();
    }

    
  }