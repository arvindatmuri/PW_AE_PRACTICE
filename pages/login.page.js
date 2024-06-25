exports.LoginPage = class LoginPage {
    /**
     * Initializes a new instance of the RegisterPage class.
     * 
     * @param {Object} page - The Playwright page object.
     */
    constructor(page) {
      this.page = page;
      this.signup_heading = page.page.getByRole("heading", { name: "New User Signup!" });
      this.signup_name =  page.getByPlaceholder("Name");
      this.signup_email =  page.locator("form").filter({ hasText: "Signup" }).getByPlaceholder("Email Address");
      this.signup_submit_button =  page.getByRole('button', { name: 'Signup' });
      this.login_heading =  page.getByRole('heading', { name: 'Login to your account' })
      this.login_pwd=  page.getByPlaceholder('Password');
      this.login_submit_btn =  page.getByRole('button', { name: 'Login' })

    }




}