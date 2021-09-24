/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first
            //.last
            //.eq(3)
            .contains('Aether Gym Pant')
            .click()

    });

    it('Deve selecionar um produto ao carrinho', () => {
        var quantidade = 10

        cy.get('.product-block')
            .contains('Aether Gym Pant').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
        cy.addProdutos('Aether Gym Pant', '36', 'Brown', 5)

    });

    it('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
        cy.addProdutos('Aether Gym Pant', '32', 'Green', 1)

    });

});