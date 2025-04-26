import { faker } from '@faker-js/faker';
import { RegisterPage } from '../pages/RegisterPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';

describe('User Flow Automation with Faker', () => {
    let user;
    let isUserRegistered = false;

    before(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.window().then((win) => win.sessionStorage.clear());
    });

  before(() => {
    user = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 10, memorable: true }),
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      address2: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipcode: faker.location.zipCode(),
      mobile: faker.phone.number(),
    };
  });

  it('should register a new user', () => {
    const registerPage = new RegisterPage();
    registerPage.visit();
    registerPage.fillRegistrationForm(user);
    registerPage.fillSignUpForm(user);
    registerPage.submit();
    registerPage.verifyRegistrationSuccess();
    isUserRegistered = true;
  });

  beforeEach(function () {
    if (!isUserRegistered) return;

    cy.session('user-session', () => {
        const loginPage = new LoginPage();
            loginPage.visit();
            loginPage.loginUser(user);
    });
  });

  it('should browse and filter products', () => {
    const productPage = new ProductPage();
    productPage.visit();
    productPage.filterByCategory();
    productPage.verifyProductList('Dress');
    productPage.selectProduct();
    productPage.verifyProductDetails('Sleeveless', '1000', 'In Stock');
  });

  it('should handle cart operations', () => {
    const cartPage = new CartPage();
    cartPage.visitBase();
    cartPage.addItemToCart("Women",1,3);
    cartPage.addItemToCart("Men",3,2);
    cartPage.addItemToCart("Kids",4,16);
    cartPage.changeItemQuantity();
    cartPage.checkFor3QuantityItem();
    cartPage.verifyCartTotal(true);
    
    cartPage.removeItemFromCart();
    cartPage.verifyCartTotal(false);

  });

  it('should complete the checkout process', () => {
    const checkoutPage = new CheckoutPage();
    checkoutPage.initiateCheckout();
    checkoutPage.placeOrder();
    checkoutPage.enterPaymentDetails( user,'4242424242424242','12','2030','123');
    checkoutPage.submitOrder();
    checkoutPage.verifyOrderConfirmation();
  });

  it('should log out and log back in', () => {
    const loginPage = new LoginPage();
    loginPage.logoutUser();
    loginPage.loginUser(user);
    loginPage.verifyLogin();
  });
});
