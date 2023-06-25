
describe("Custom", ()=>{
    beforeEach(()=>{
     
        cy.visit(`${Cypress.env('demoQA')}login`)
         
        
    })
    it('Success Login', ()=>{

        cy.login('test','Test1234*')
        cy.url().should('contain', 'profile')
            
    })
    
    it('Failed Login', ()=>{
        
        cy.login('tesdt', 'Test1234*')
        cy.url().should('contain', 'login')
    })
})