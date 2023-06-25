describe.only("Demo Qa", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}checkbox`)
    })
    it("Checbox scenario", ()=>{
        cy.get('input[type="checkbox"]').click({force:true})
        cy.get('#result').should("have.text", "You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile")
    })

})