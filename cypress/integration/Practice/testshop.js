describe('Тест онлайн-магазина', function(){
    it('Тест процесса покупки', function(){
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(3000);
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(3000);
        cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click({force: true});
        cy.get('.checkout-button').click();
        cy.get('#billing_first_name').type('Дмитрий');
        cy.get('#billing_last_name').type('Дмитриев');
        cy.get('#billing_address_1').type('ул.Московская, д.21');
        cy.get('#billing_city').type('г.Москва');
        cy.get('#billing_state').type('Московская область')
        cy.get('#billing_postcode').type('165316');
        cy.get('#billing_phone').type('+79999999999');
        cy.get('#billing_email').type('primer@example.com');
        cy.get('#place_order').click({force: true});
        cy.wait(5000);
        cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.');



    })

})