const { test, expect } = require('@playwright/test');
var utils = require('../pages/utils');
import { faker } from "@faker-js/faker";

// test('has title', async ({ page }) => {
  
//     await page.goto('https://playwright.dev/');
//   // await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle('/Playwright/');
// });

// test('get data from json', async () => {
//   console.log(utils.readValueFromJsonFile())
// });

test("Create a Valid user Data for Test Scenarios", async ({ page }) => {
  let name = faker.person.fullName();
  let firstname = faker.person.firstName();
  let lastname = faker.person.lastName()
  let email = faker.internet.email();
  let company = faker.company.name();
  let address = faker.location.streetAddress();
  let state = faker.location.state();
  let city = faker.location.city();
  let zip = faker.location.zipCode()
  let mobile_number = faker.phone.number()

  await page.goto("https://automationexercise.com/");
  await expect(
    page.getByRole("link", { name: "Website for automation" })
  ).toBeVisible();
  await page.getByRole("link", { name: " Signup / Login" }).click();
  await expect(
    page.getByRole("heading", { name: "New User Signup!" })
  ).toBeVisible();
  
  // faker.phone.number('+48 91 ### ## ##') // '+48 91 463 61 70'
  await page.getByPlaceholder("Name").fill(name);
  await page
    .locator("form")
    .filter({ hasText: "Signup" })
    .getByPlaceholder("Email Address")
    .fill(email);
  await page.getByRole('button', { name: 'Signup' }).click();
  
  await expect(page.getByText('Enter Account Information')).toBeVisible();

  await expect(page.getByText('Title')).toBeVisible();
  await expect(page.getByText('Mrs.')).toBeVisible();
  await expect(page.getByText('Mr.')).toBeVisible();
  await page.getByLabel('Mr.').check();

  await expect(page.getByText('Name *', { exact: true })).toBeVisible();
  await expect(page.getByLabel("Name *", { exact: true })).toHaveValue(name);

  await expect(page.getByText('Email *')).toBeVisible();
  await expect(page.getByLabel("Email *")).toHaveValue(email);
  console.log("Email:" + email)
  await expect(page.getByText('Password *')).toBeVisible();
  await page.getByLabel("Password *").fill("password");

  await expect(page.getByText('Date of Birth')).toBeVisible();
  await page.locator("#days").selectOption("30");
  await page.locator("#months").selectOption("3");
  await page.locator("#years").selectOption("1927");
  
  await expect(page.getByLabel('Sign up for our newsletter!')).toBeVisible();
  await expect(page.getByLabel('Receive special offers from')).toBeVisible();
  await expect(page.getByText('Sign up for our newsletter!')).toBeVisible();
  await expect(page.getByText('Receive special offers from')).toBeVisible();
  await page.getByLabel('Receive special offers from').check();
  await page.getByLabel('Sign up for our newsletter!').check();


  await expect(page.getByText('Address Information')).toBeVisible();

  await expect(page.getByText('First name *')).toBeVisible();
  await page.getByLabel('First name *').fill(firstname);

  await expect(page.getByText('Last name *')).toBeVisible();
  await page.getByLabel('Last name *').fill(lastname);


  await expect(page.getByText('Company', { exact: true })).toBeVisible();
  await page.getByLabel('Company', { exact: true }).fill(company);


  await expect(page.getByText('Address * (Street address, P.')).toBeVisible();
  await expect(page.locator(".inline-infos")).toHaveCSS("color","rgb(241, 51, 64)");
  await page.getByText('Address * (Street address, P.').fill(address)

  await expect(page.getByText('Address 2')).toBeVisible();

  await page.getByLabel('Address 2').click();
  await page.getByLabel('Address 2').fill('UNIT 7777');
  
  await expect(page.getByText('Country *')).toBeVisible();    
  await page.getByLabel('Country *').selectOption('United States');


  await expect(page.getByText('State *')).toBeVisible();
  await page.getByLabel('State *').fill(state);


  await expect(page.getByText('City *')).toBeVisible();
  await page.getByLabel('City *').fill(city);

  await expect(page.getByText('Zipcode *')).toBeVisible();
  await page.locator('#zipcode').fill(zip);

  await expect(page.getByText('Mobile Number *')).toBeVisible();
  await page.getByLabel('Mobile Number *').fill(mobile_number);


  await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();

  await page.getByRole('button', { name: 'Create Account' }).click();
  // await page.getByText('Account Created!').click();
  await expect(page.getByText('Account Created!')).toBeVisible();
  await expect(page.getByText('Account Created!')).toHaveCSS("color","rgb(0, 128, 0)")
  await expect(page.getByRole('link', { name: 'Continue' })).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();

  await expect(page.locator('#header')).toContainText('Logged in as');
  utils.createJsonFileIfNotExists({"email": email});
});
