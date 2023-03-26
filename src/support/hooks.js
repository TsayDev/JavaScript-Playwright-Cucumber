const { AfterAll, BeforeAll } = require("@cucumber/cucumber");
import * as playwright from "playwright";

global.PW = {};

BeforeAll(async function () {
  PW.browser = await playwright.chromium.launch({
    headless: false,
  });
  PW.context = await PW.browser.newContext({
    baseURL: 'https://www.saucedemo.com'
  });
});

AfterAll(async function () {
  if (PW.browser) {
    await PW.browser.close();
  }
});
