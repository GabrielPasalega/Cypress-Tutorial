let img:HTMLImageElement;
describe("Broken images with Demo QA", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("theInternet")}/broken_images`)
    })
    it.skip("Not Broken Image Assertion",()=>{
        cy.get(':nth-child(2) > [src="/images/Toolsqa.jpg"]').should('be.visible').and(($img)=>{
        img = $img[0] as unknown as HTMLImageElement   
        expect(img.naturalWidth).to.be.greaterThan(0)})
    })
    it.skip("Broken Image Assertion",()=>{
        //cy.get('div > img[src="/image/Toolsqa_1.jpg"]').should('be.visible')
        cy.get('[src="/images/Toolsqa_1.jpg"]').should('be.visible').and(($img)=>{
            img = $img[0] as unknown as HTMLImageElement   
            expect(img.naturalWidth).to.be.greaterThan(0)})
        })

        it("Not Broken Image Assertion(first)",()=>{
            cy.get("div.example img")
            .first()
            .should("be.visible")
            .and(($img)=>{
                img = $img[0] as unknown as HTMLImageElement   
                expect(img.naturalWidth).to.be.greaterThan(0)})
            })
        })
        it("Broken Image Assertion(last",()=>{
            
            cy.get("div.example img")
            .last()
            .should("be visible")
            .and(($img)=>{
                img = $img[0] as unknown as HTMLImageElement  | null;
                expect(img.naturalWidth).to.be.greaterThan(0)})
            })
        
    
    