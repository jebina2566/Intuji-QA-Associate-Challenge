export class CartPage {
    visit() {
      cy.visit('/view_cart');
    }

    visitBase() {
      cy.visit('/');
    }
  
    addItemToCart(category, categoryId, dataProductId) {
      cy.get('[href="#'+category+'"]').click()
      cy.get('[href="/category_products/'+categoryId+'"]').click()
      cy.get('[href="/product_details/'+dataProductId+'"]').click()
      cy.get('.cart').click()
    }
  
    changeItemQuantity(productName, quantity) {
      cy.get('div.modal-body').find('[href="/view_cart"]').click()
      cy.get('[href="/product_details/3"]').click()
      cy.get('#quantity').focus().type('{uparrow}')
      cy.get('.cart').click()
    }
  
    removeItemFromCart() {
      cy.get('[data-product-id="3"]').click()
    }
  
    verifyCartTotal(shouldNavigateToCart) {
      if(shouldNavigateToCart)
        this.visit()

      cy.get('#cart_info_table tbody > tr').each(($row) => {
        const priceText = $row.find('.cart_price').text().replace('Rs. ', '');
        const quantityText = $row.find('.cart_quantity').text();
        const totalText = $row.find('.cart_total').text().replace('Rs. ', '');
  
        const price = parseFloat(priceText);
        const quantity = parseInt(quantityText);
        const total = parseFloat(totalText);
  
        expect(total).to.eq(price * quantity);
      });
    }

    checkFor3QuantityItem() {
      this.visit();
      cy.get('#cart_info_table tbody tr').should('exist').then(($rows) => {
        const found = Array.from($rows).some((row) => {
          const button = row.querySelector('td.cart_quantity > button');
          if (!button) return false;
    
          const quantity = parseInt(button.textContent.trim());
          return quantity === 3;
        });
    
        expect(found, 'At least one item has quantity 3').to.be.true;
      });
    }
    
  }
  