const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/", 
    viewportWidth: 1280,                   
    viewportHeight: 720,
    
    setupNodeEvents(on, config) {
      mochawesome(on);
      return config;
    },

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      overwrite: false,
      html: true,
      json: true
    },
  },
});
