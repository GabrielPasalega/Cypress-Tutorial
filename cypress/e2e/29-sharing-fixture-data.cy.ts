import {testData} from "./model"

describe("Sharing my fixture", ()=>{
    beforeEach(function(){
        cy.fixture('jsonExample').as('testData')
    })
    it("Accesing the shared fixture#1",function () {
        cy.get<testData>('@testData').then((testData)=>{
            
            cy.log("Accesing the test data property 1",testData.property1)
        })
    })
    it("Acesing the shared fixture#2", function () {
        cy.get<testData>('@testData').then((testData)=>{
            
            cy.log("Accesing the test data property 1",testData.property1)
        })
    })
    it("Acesing the shared fixture#2", function () {
        cy.get<testData>('@testData').then((testData)=>{
            
            cy.log("Accesing the test data property 1",testData.property1)
        })
    })
})