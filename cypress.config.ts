import { defineConfig } from "cypress";
//verify download import
const {isFileExist, findFiles} = require ('cy-verify-downloads')

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      on('task', {isFileExist,findFiles})
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
    env:{
      demoVar: "Hello from Cypress.Config.Ts",
      demoQA: "https://demoqa.com/",
      theInternet: "https://the-internet.herokuapp.com/",
      //https://www.globalsqa.com/angularjs-protractor-practice-site/
      Angular: "https://www.globalsqa.com/"
    }
  },
  pageLoadTimeout:60000,
  viewportHeight: 1000,
  viewportWidth: 1400,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    charts:true,
    reportPageTitle: 'Udemy Course Report',
    embeddedScreenshots: true,
    inlineAssets:true,
    saveAllAttempts:false
  },
  retries:{
    runMode:2,
    openMode:1
  }
});
