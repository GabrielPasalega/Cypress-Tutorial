describe('template spec', () => {
  beforeEach(()=>{
    cy.log('hello from before hook')
  })
  afterEach(()=>{
    cy.log('hello from after hook')
  })
  it('test 1', () => {
    cy.log('Hello World')
  })
    it('test 2', () => {
      cy.log('Hello World')

    })
      it.only('test 3', () => {
        cy.log('Hello World')
  })
  it('test 4', () => {
    cy.log('Hello World')
})
})