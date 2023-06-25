import { defineConfig } from "cypress";
//verify download import
const {isFileExist, findFiles} = require ('cy-verify-downloads')

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      on('task', {isFileExist,findFiles})
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
});
