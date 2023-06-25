import { LoginPage} from '../../cypress/pages/login'
import { ProfilePage } from '../../cypress/pages/Profile'

describe("Basic", ()=>{
    beforeEach(()=>{
     
        LoginPage.visit()
         
        
    })
    it('Success Login', ()=>{
            //LoginPage.submitLogin('test', 'Test1234*')
            LoginPage.usernameElement.type("test")
            LoginPage.passwordElement.type("Test1234*")
            LoginPage.loginElement.click()
            cy.url().should('contain', 'profile')
            LoginPage.userElement.should('have.text', 'test')
            ProfilePage.headerElement.should('have.text', "Profile")
            //cy.get('#userName-value').should("have.text", 'test')

            
    })
    
    it('Failed Login', ()=>{
        
            LoginPage.submitLogin('tasd', 'Test1234')
            cy.get('#login').click()
            cy.url().should('not.contain', 'profile')
            ProfilePage.headerElement.should('have.text', "Login")            
            LoginPage.invalidLoginMessageElement.should("have.text", 'Invalid username or password!')
    })
})