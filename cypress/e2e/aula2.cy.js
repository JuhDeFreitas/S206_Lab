/// <referennce = cypress>

describe("teste de criação, regisstro e login", () =>{

  // nome do teste
  it("Teste criação de usuarios com sucesso", () =>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')

  })


});

it('Simulação register', function() {
  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('a.btn').click();
  
  cy.get('[name="firstName"]').click();
  cy.get('[name="firstName"]').type('juila{enter}');
  cy.get('[name="lastName"]').click();
  cy.get('[name="lastName"]').type('freitas{enter}');
  
  cy.get('[name="username"]').click();
  cy.get('[name="username"]').type('julia1234{enter}');
  
  cy.get('[name="password"]').click();
  cy.get('[name="password"]').type('1234');
  cy.get('button.btn').click();
  
  cy.get('div.alert').should("contain.text", "Registration successful")
});

it('Simulação register Falha', function() {
  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('a.btn').click();
  
  cy.get('[name="firstName"]').click();
  cy.get('[name="firstName"]').type('juila{enter}');
  cy.get('[name="lastName"]').click();
  cy.get('[name="lastName"]').type('freitas{enter}');
  cy.get('[name="username"]').click();
  cy.get('[name="username"]').type('julia1234{enter}');
  
  cy.get('button.btn').should("be.disabled")
});

it("simulaçao de login com sucesso", function(){
    let infos = criar_user()
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('[name="username"]').type(infos[0]);
    cy.get('[name="password"]').type(infos[1]);
    cy.get('button.btn').click();
    cy.get('h1.ng-binding').should("contain.text", infos[0])
})

function criar_user(){

  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let id = hora + minuto + seg + "id"
  let senha = hora + minuto + seg + "senha"
  let infos = [id,senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('a.btn').click();
  
  cy.get('[name="firstName"]').click();
  cy.get('[name="firstName"]').type(id);
  cy.get('[name="lastName"]').click();
  cy.get('[name="lastName"]').type(id);
  
  cy.get('[name="username"]').click();
  cy.get('[name="username"]').type(id);
  
  cy.get('[name="password"]').click();
  cy.get('[name="password"]').type(senha);
  cy.get('button.btn').click();
  
  cy.get('div.alert').should("contain.text", "Registration successful")
  return infos
}