exports.RegisterPage = class RegisterPage {
    /**
     * Initializes a new instance of the RegisterPage class.
     * 
     * @param {Object} page - The Playwright page object.
     */
    constructor(page) {
      this.page = page;

      // Title element
      this.titleElement = page.getByText('Title');

      // Label and input for the name field
      this.nameLabel = page.getByText('Name *', { exact: true });
      this.nameInput = page.getByLabel('Name *', { exact: true });

      // Label and input for the email field
      this.emailLabel = page.getByText('Email *');
      this.emailInput = page.getByLabel('Email *', { exact: true });

      // Labels for the password and confirm password fields
      this.passwordLabel = page.getByText('Password *');
      this.confirmPasswordLabel = page.getByText('Confirm Password *');

      // Register button
      this.registerButton = page.getByRole('button', { name: 'Register' });

      // Label and select elements for the date of birth
      this.dateOfBirthLabel = page.getByText('Date of Birth');
      this.dateOfBirthDaySelect = page.locator('#days');
      this.dateOfBirthMonthSelect = page.locator('#months');
      this.dateOfBirthYearSelect = page.locator('#years');

      // Checkboxes for newsletter and special offers
      this.newsletterCheckbox = page.getByLabel('Sign up for our newsletter!');
      this.specialOffersCheckbox = page.getByLabel('Receive special offers from');

      // Label for the address information
      this.addressInformationLabel = page.getByText('Address Information');

      // Labels and inputs for the first name, last name, company, address lines, country, state, city, zip code, and mobile number fields
      this.firstNameLabel = page.getByText('First name *');
      this.firstNameInput = page.getByLabel('First name *');
      this.lastNameLabel = page.getByText('Last name *');
      this.lastNameInput = page.getByLabel('Last name *');
      this.companyLabel = page.getByText('Company', { exact: true });
      this.companyInput = page.getByLabel('Company', { exact: true });
      this.addressLine1Label = page.getByText('Address * (Street address, P.');
      this.addressLine1Input = page.getByLabel('Address * (Street address, P.');
      this.addressLine2Label = page.getByText('Address 2');
      this.addressLine2Input = page.getByLabel('Address 2');
      this.countryLabel = page.getByText('Country *');
      this.countryInput = page.getByLabel('Country *');
      this.stateLabel = page.getByText('State *');
      this.stateInput = page.getByLabel('State *');
      this.cityLabel = page.getByText('City *');
      this.cityInput = page.getByLabel('City *');
      this.zipCodeLabel = page.getByText('Zipcode *');
      this.zipCodeInput = page.locator('#zipcode');
      this.mobileNumberLabel = page.getByText('Mobile Number *');
      this.mobileNumberInput = page.getByLabel('Mobile Number *');
    }
   
    async enterFirstName(firstName) {
      await this.firstNameField.fill(firstName)
    }
  }