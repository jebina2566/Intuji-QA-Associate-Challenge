export class CheckoutPage {
    initiateCheckout() {
      cy.visit('/view_cart')
      cy.get('.check_out').click();
    }

    placeOrder() {
      cy.get('[href="/payment"]').click();
    }
    
    enterPaymentDetails(user,cardNumber, expiryMM, expirYYYY, cvc) {
      cy.get('[data-qa="name-on-card"]').type(user.name);
      cy.get('[data-qa="card-number"]').type(cardNumber);
      cy.get('[data-qa="cvc"]').type(cvc);
      cy.get('[data-qa="expiry-month"]').type(expiryMM);
      cy.get('[data-qa="expiry-year"]').type(expirYYYY);
    }
  
    submitOrder() {
      cy.get('[data-qa="pay-button"]').click();
    }
  
    verifyOrderConfirmation() {
      cy.get('div.modal-body').should('contain', 'Congratulations! Your order has been confirmed');
    }
  }
  