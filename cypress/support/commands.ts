import "cypress-file-upload"
import "@testing-library/cypress/add-commands"
import '@4tw/cypress-drag-drop'
require('cy-verify-downloads').addCustomCommand()
/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable{
            login(email : string, password: string): Chainable<void>
            parseXlsx(inputFile:any):any;
        }
    }
}

Cypress.Commands.add('login', (username:string, password:string)=>{
    cy.get('#userName').type(username)
    cy.get('#password').type(password)
    cy.get('#login').click()
})

Cypress.Commands.add("parseXlsx", (inputFile)=>{
    return cy.task("parseXlsx", {filePath: inputFile})
})