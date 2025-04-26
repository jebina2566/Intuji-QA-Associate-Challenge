export class RegisterPage {
    visit() {
      cy.visit('/login');
    }
  
    fillRegistrationForm(user) {
      cy.get('input[name="name"]').type(user.name);
      cy.get('[data-qa="signup-email"]').type(user.email);
      cy.get('[data-qa="signup-button"]').click();
    }

    fillSignUpForm(user) {
        cy.get('#id_gender2').click()
        cy.get('#password').type(user.password)
        cy.get('#days').select('1')
        cy.get('#months').select('March')
        cy.get('#years').select('2000')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('#first_name').type(user.firstName)
        cy.get('#last_name').type(user.lastName)
        cy.get('#company').type(user.company)
        cy.get('#address1').type(user.address1)
        cy.get('#address2').type(user.address2)
        cy.get('#country').select('Canada')
        cy.get('#state').type(user.state)
        cy.get('#city').type(user.city)
        cy.get('#zipcode').type(user.zipcode)
        cy.get('#mobile_number').type(user.mobile)
    }
  
    submit() {
        cy.get('[data-qa="create-account"]').click()
    }
  
    verifyRegistrationSuccess() {
      cy.url().should('include', '/account');
      cy.get('[data-qa="account-created"]').should('contain', 'Account Created!');
    }
  }
  