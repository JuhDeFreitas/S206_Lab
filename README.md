# 🧪 Projeto de Testes de Interface com Cypress

## 📋 Descrição

Este projeto realiza **testes automatizados de interface (UI/UX)** utilizando o framework **Cypress**, com foco em funcionalidades básicas do site [SauceDemo](https://www.saucedemo.com/).

Os testes cobrem as principais ações do usuário:
- Login válido e inválido  
- Adição e remoção de itens no carrinho  
- Verificação de contador do carrinho  
- Filtro de ordenação de produtos (do menor para o maior preço)

Esses testes ajudam a validar a experiência do usuário e garantir o funcionamento correto dos principais fluxos do site.

---

## 🧰 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — Framework de testes de ponta a ponta  
- [Node.js](https://nodejs.org/) — Ambiente de execução  
- [Mochawesome Reporter](https://github.com/LironEr/cypress-mochawesome-reporter) — Geração de relatórios HTML de testes  

---

## Para rodar os teste com Cypress

./node_modules/.bin/cypress run --spec '.\cypress\e2e\lista_1\lista1.cy.js'

 
## Relatório dos testes rodados em HTML

![alt text](image.png)


