exports.HomePage = class HomePage {
    /**
     * Initializes a new instance of the RegisterPage class.
     * 
     * @param {Object} page - The Playwright page object.
     */
    constructor(page) {
      this.page = page;
      this.signup_link = page.getByRole("link", { name: " Signup / Login" });
      this.logo_link = page.getByRole("link", { name: "Website for automation" });
    }


}