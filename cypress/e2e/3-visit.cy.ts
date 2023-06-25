describe('basics', () => {
    beforeEach(()=>{cy.visit("/textinput")})

    it('visit explanation text input', () => {
        cy.url().then((url)=>{
            cy.log(`Printing the URL: ${url}`)    
            expect(url).to.contain('/textinput')      
        })
      })
      it('title validation', ()=>{
        cy.title().then((title)=>{
            cy.log(title)
            expect(title).to.equal('Text Input')
        })
      })
      it("input Challenge",()=>{
        cy.get('input#newButtonName').type('Hello Input')
        cy.get('button#updatingButton').click().should('have.text', 'Hello Input')
      })
  })