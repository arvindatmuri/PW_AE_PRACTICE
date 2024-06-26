const { RegisterPage } = require('../pages/register.page');
const { LoginPage } = require('../pages/login.page');
const { HomePage } = require('../pages/home.page');
const { ProductsPage } = require('../pages/products.page');
const { CartPage } = require('../pages/cart.page');
import { test } from '@playwright/test';
import { faker } from "@faker-js/faker";



test("Test Case 14: Place Order: Register while Checkout", async ({ page }) => {
    let name = faker.person.fullName();
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName()
    let email = faker.internet.email();
    let company = faker.company.name();
    let address = faker.location.streetAddress();
    let state = faker.location.state();
    let city = faker.location.city();
    let zip = faker.location.zipCode()
    let mobileNumber = faker.phone.number()
    let address2 = "UNIT 7777";
    let country = "United States";
    let password = "Password@123";
    let day = "30";
    let month = "3";
    let year = "1927";

    const register = new RegisterPage(page);
    const home = new HomePage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const login = new LoginPage(page);
    
    await test.step('Navigate to Automation Exercise Website', async () => {
        await page.goto('https://automationexercise.com/');
    });

    await test.step('Verify that home page is visible successfully', async () => {
        await home.validateHomePage();
    });

    await test.step('Add Products to Cart', async () => {
        await products.addProduct(1);  
        await products.addProduct(2);   
    });

    await test.step("Click 'Cart' button", async () => {
       await cart.clickOnCartButton();
        
    });

    await test.step("Verify that cart page is displayed", async () => {
        await cart.validateCartPage();
    });

    await test.step("Click Proceed To Checkout", async () => {
        await cart.validateProceedToCheckoutButton();
        await cart.clickOnProceedToCheckoutButton();
    });

    await test.step("Verify that checkout page is displayed", async () => {
        await cart.validateCheckoutModal();
    });

    await test.step("Register while Checkout", async () => {
        await cart.clickOnRegisterOrLoginLink();
    });

    await test.step("Validate Register New User", async () => {
        await login.signUpNewUser(name, email);
    });

    await test.step("Register with Data", async () => {
        await register.validateRegistrationPageForm();
        await register.registerNewUser(name, email, password, day, month, year, firstName, lastName, company, address, address2, country, state, city, zip, mobileNumber);
    });

    await test.step("Verify 'ACCOUNT CREATED!' and click 'Continue' button", async () => {
        await register.validateAccountCreation();
        await register.clickOnContinueButton();
    });

    await test.step("Verify 'Logged in as' and 'Delete Account' button", async () => {
        await register.validateLoggedInAs();
        await register.validateDeleteAccount();
    });

    await test.step("Click 'Cart' button", async () => {
        await cart.clickOnCartButton();
         
     });

     await test.step("Click Proceed To Checkout", async () => {
        await cart.validateProceedToCheckoutButton();
        await cart.clickOnProceedToCheckoutButton();
    });



});     