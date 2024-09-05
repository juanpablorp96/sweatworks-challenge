const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://www.saucedemo.com',
    defaultCommandTimeout: 20000,
    specPattern: "cypress/e2e/tests/features/*.feature",
    /* Workaround for this open issue with the saucedemo site https://github.com/cypress-io/cypress/issues/27501
        If the issue persists, try removing this folder:
        ~/.../Cypress/cy/production/browsers/chrome-stable/interactive/Default/Service Worker/CacheStorage
    */
    watchForFileChanges: false,
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],
  },
});
