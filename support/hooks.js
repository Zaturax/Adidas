const pw = require('playwright');
const {
  BeforeAll,
  Before,
  After,
  AfterAll,
  defineStep,
  setDefaultTimeout
} = require('@cucumber/cucumber');
const globalHooks = require('./global-hooks');
const logger = require('./logger');
setDefaultTimeout(60 * 1000);
// Launch options.
const launchOptions = {
  headless: false,
};

globalHooks({
  BeforeAll,
  Before,
  After,
  AfterAll,
  Step: defineStep,
  playwright: {pw, launchOptions},
  logger,
});
