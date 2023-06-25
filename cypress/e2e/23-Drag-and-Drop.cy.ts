describe("Drag n Drop", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env('demoQA')}droppable`)
    })
    it('Drag n Drop', ()=>{
        cy.get("#draggable").drag("#droppable", {force : true})
    })
})