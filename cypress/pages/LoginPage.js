export class LoginPage {
  visit() {
    cy.visit('/login');
  }

  loginUser(user){
    cy.get('[data-qa="login-email"]').type(user.email);
    cy.get('[data-qa="login-password"]').type(user.password);
    cy.get('[data-qa="login-button"]').click();
  }
  
  login(email, password) {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  }

  verifyLogin() {
    cy.get('ul.nav').should('contain', 'Logged in as');
  }

  logoutUser(){
    cy.visit('/');
    cy.get('[href="/logout"]').click();
  }
}
