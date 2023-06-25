describe("Upload a file in the QA Demo Site", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}upload-download`)
    })
    it('Upload the file', () =>{
        cy.get('#uploadFile').attachFile('example.json')
        cy.get('#uploadedFilePath').should('contain', 'example.json')
    })
})