import { Then } from "@cucumber/cucumber";
import { sleep } from '../support/sleep';

Then(/^I go to SauceDemo$/, async function () {
  this.page = await PW.context.newPage();
  await this.page.goto('/');
});

Then(/^I log in$/, async function () {
  await this.page.locator('#user-name').fill('standard_user');
  await this.page.locator('#password').fill('secret_sauce');
  await this.page.locator('#login-button').click();
});

Then(/^I wait for (\d) second(?:|s)$/, async function (seconds) {
  await sleep(seconds*1000);
});