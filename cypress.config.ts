import { defineConfig } from "cypress";
//verify download import
const {isFileExist, findFiles} = require ('cy-verify-downloads')
//Excel
const xlsx = require('node-xlsx').default;
const fs = require('fs')//for file
const path = require('path')
//mySQL requirements
const mysql = require("mysql")

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
  //Verify download import    
      on('task', {isFileExist,findFiles})
//Excel
      on("task",{
        parseXlsx({filePath}){
          return new Promise((resolve,reject)=>{
            try{
              const jsonData =xlsx.parse(fs.adFileSync(filePath));
              resolve(jsonData)
            } catch(e){
              reject(e)
            }
          })
        }
      }),
      //mySQL implementation
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
      });
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
    env:{
      demoVar: "Hello from Cypress.Config.Ts",
      demoQA: "https://demoqa.com/",
      theInternet: "https://the-internet.herokuapp.com/",
      //https://www.globalsqa.com/angularjs-protractor-practice-site/
      Angular: "https://www.globalsqa.com/",
      db:{
        host: "localhost",
        user:"root",
        password:"",
        database:"cypress_test"
      }
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

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}