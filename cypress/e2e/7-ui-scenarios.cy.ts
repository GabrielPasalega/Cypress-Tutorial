describe.skip('Click Challenge',()=>{
   beforeEach(()=>{
    cy.visit('/click')
   })
    it('Class Assertion',()=>{
        cy.get('#badButton').click().should('have.class', 'btn-success')
    })
    it('background assertion',()=>{
        cy.get('#badButton').click().should('have.css', 'background-color', 'rgb(40, 167, 69)')
    })
})

describe.skip('Hover challenge',()=>{
    beforeEach(()=>{
        cy.visit('/mouseover')
       })
    it('hover cypress workaround',()=>{
        cy.get('.text-primary').trigger('mouseover')
    })
    it('Real hover',()=>{
        cy.get('.text-primary').realHover()
    })
})
describe('Dynamic table challenge',()=>{
    beforeEach(()=>{
        cy.visit('/dynamictable')
       })
    it('CPU Chrome',()=>{
        cy.get(`div[role="row"] span`).each(($cell)=>{
            if($cell.text().includes('Chrome')){
            cy.log(`I have found the ${$cell.text()} row`)
            let chromeRowValues: string[] = []
            chromeRowValues.push($cell.next().text())
            chromeRowValues.push($cell.next().next().text())
            chromeRowValues.push($cell.next().next().next().text())
            chromeRowValues.push($cell.next().next().next().next().text())
            cy.log('Chrome Row Values', chromeRowValues)
            chromeRowValues.forEach((chromeValue)=>{
                if(chromeValue.includes('%')){
                    cy.log(chromeValue)
                    cy.get('.bg-warning').should('have.text', `Chrome CPU: ${chromeValue}`)
                }
            })
        }
        })
        
    })
})