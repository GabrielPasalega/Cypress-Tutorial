describe("I-Frames", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}nestedframes`)
    })
    it.skip('Simple and Nested Iframes', () =>{
        cy.get('#frame1').then(function ($iframe) {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).should('have.text', 'Parent frame')
            cy.wrap($body).find('iframe').then(function($childIframe){
                const $childbody=$childIframe.contents().find("body")
                cy.wrap($childbody).find("p").should("have.text", "Child Iframe")
            })
        })
    })
})

describe("Typing on an Iframe", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("theInternet")}/iframe`)
    })
    it("Iframe typing", () =>{
        cy.get('#mce_0_ifr').then(($iframe) =>{
            const $body = $iframe.contents().find('body')
            cy.wrap($body).find('p').type('{selectAll}{del}Hello World!')
        })
        it("Iframe typing", () =>{
            cy.get('#mce_0_ifr').then(($iframe) =>{
                const $body = $iframe.contents().find('body')
                cy.wrap($body).find('p').should('have.text', 'Hello World!')
            })
    })

})

})