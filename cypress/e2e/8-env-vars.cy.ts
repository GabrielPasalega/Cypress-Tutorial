describe("Env Variable demo", ()=>{
    it('Demo', ()=>{
        cy.log(`Printing Environment Variable Value : ${Cypress.env('demoVar')}`)
    })
})