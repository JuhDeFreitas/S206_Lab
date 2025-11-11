/// <referennce = cypress>

describe('Teste de Login e Navegação', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Teste de login válido e acesso a página de produtos', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Verifica se chegou na página de produtos
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });

  it('Teste de login inválido', () => {
    cy.get('[data-test="username"]').type('usuario_invalido');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match');
  });
});

describe('Teste de Carrinho/filtro', () => {

  it('Deve adicionar um item ao carrinho e validar o contador', () => {
    cy.login_saucedemo()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  it('Deve acessar o carrinho e verificar o item adicionado', () => {
    cy.login_saucedemo()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bike Light');
  });

  it('Deve validar a remoção dos itens do carrinho', function() {
    cy.login_saucedemo()
    cy.visit('https://www.saucedemo.com/');
    cy.login_saucedemo();
    
    // add item ao carrinho
    cy.get('[data-test="item-3-title-link"] [data-test="inventory-item-name"]').click();
    cy.get('[data-test="add-to-cart"]').click();
    
    //verifica se contem contedor do carriho igual a 1
    cy.get('[data-test="shopping-cart-link"]').should('contain', '1');
    
    // remove item
    cy.get('[data-test="remove"]').click();
    
    //verifica se foi retirado o item
    cy.get('[data-test="shopping-cart-link"]').should('have.text', '');
  });

    
  it('Deve validar o filtro de menor preç para o maior ', function() {
    cy.visit('/');
    cy.login_saucedemo()
    
    cy.get('[data-test="product-sort-container"]').select('lohi');
    
    cy.get('div:nth-child(3) [data-test="inventory-item-price"]')
      .invoke('text')
      .then((preco1) => {
        // Converte para número (remove o "$")
        const valor1 = parseFloat(preco1.replace('$', ''));

        // Captura o texto do segundo preço
        cy.get('div:nth-child(6) [data-test="inventory-item-price"]')
          .invoke('text')
          .then((preco2) => {
            const valor2 = parseFloat(preco2.replace('$', ''));

            // Faz a comparação
            expect(valor1).to.be.lessThan(valor2); // ou .to.be.greaterThan()
          });
      });

  });
});









