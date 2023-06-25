describe.only("Demo Qa", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}buttons`)
    })
    it("Double Click test", ()=>{
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('have.text','You have done a double click')
        
    })
    
    it("Righ Click test", ()=>{
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('have.text','You have done a right click')
    })
    
})