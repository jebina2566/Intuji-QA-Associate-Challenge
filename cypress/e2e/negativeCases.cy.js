import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';

describe('Negative test cases', () => {
   
    let user;
      before(()=>{
        user = {
            name: 'test',
            email: 'test',
            password: 'test123'
        }
      })

      it('should prevent submission when email format is invalid', () => {
        const registerPage = new RegisterPage();
        registerPage.visit();
        registerPage.fillRegistrationForm(user);
        cy.get('.signup-form form').then(($form) => {
          expect($form[0].checkValidity()).to.be.false;
        });
      });

      it('should display error on incorrect email or password', () => {
        const loginPage = new LoginPage();
        loginPage.visit()
        user.email = 'test@gmail.com'
        loginPage.loginUser(user)
        cy.contains('Your email or password is incorrect!').should('be.visible');
      });
});