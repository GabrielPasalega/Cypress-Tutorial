describe("Date Picker", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env('demoQA')}date-picker`)
    })
    it('Date Picker', ()=>{
       cy.get("input#datePickerMonthYearInput").click()
       cy.get('select.react-datepicker__month-select').select('9')
       cy.get('select.react-datepicker__year-select').select('1999')
       cy.findByText('21').click()
       cy.get("input#datePickerMonthYearInput").should("have.value", "10/21/1999")
    })
})