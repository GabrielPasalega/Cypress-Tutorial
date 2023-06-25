describe.only("Dealing with links", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}links`)
    })
    it.skip("First Approach, not click the link",()=>{
        cy.get('#simpleLink').should('have.attr', 'href', 'https://demoqa.com')
        cy.get('#simpleLink').should('have.attr', 'target', '_blank')
    })
    it.skip("Second Approach, remove the target",()=>{
        cy.get('#simpleLink').invoke('removeAttr', 'target').click()
        cy.url().then((url)=>{
            expect(url).to.be.equal('https://demoqa.com/')
        })
        
    })
    
})
Cypress.config('defaultCommandTimeout', 10000)
describe.only("Interceptin API Request after clicking", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}links`)
        cy.intercept('GET', "https//demoqa.com/created").as('linkStatus')
    })
    it("API interception", ()=>{
        cy.get("a#created").click()
        cy.wait(`@linkStatus`).then((request)=>{
            cy.log('This is the request intercepted', request)
            expect(request.response.statusCode).to.be.equal(201)
        })
    })
    

})