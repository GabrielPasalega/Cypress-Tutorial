describe("empty sepc", ()=>{
    before(()=>{
        cy.log("Hello from the before hook")
    })
    after(()=>{
        cy.log("Hello from the after hook")
    })
    beforeEach(()=>{
        cy.log("Hello from the before each hook")
    })
    afterEach(()=>{
        cy.log("Hello from the after each hook")
    })

    it("test case", ()=>{
        cy.log("hello world")
    })
})