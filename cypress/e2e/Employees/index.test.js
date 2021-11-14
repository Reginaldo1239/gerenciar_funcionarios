import Faker from 'faker';

// describe('Testa o processo de cadastro de um novo funcionário', () => {
//   it('Cadastrar um novo funcionário com sucesso', () => {
//     cy.visit('/employees/store');
//     cy.url().should('include', '/employees/store');
//     cy.get('input[name=nome]').type(Faker.name.firstName() + ' ' + Faker.name.lastName());
//     cy.get('input[name=cpf]').type('11863714049');
//     cy.get('input[name=salario]').type(Faker.datatype.number());
//     cy.get('input[name=desconto]').type(Faker.datatype.number());
//     cy.get('input[name=dependentes]').type(Faker.datatype.number());
//     cy.get('button').contains('Salvar').click();
//     // formulario cadastrado todos os campos devem estar vazios;
//     cy.get('input[name=nome]').should('have.value', '')
//     cy.get('input[name=cpf]').should('have.value', '')
//     cy.get('input[name=salario]').should('have.value', '')
//     cy.get('input[name=desconto]').should('have.value', '')
//     cy.get('input[name=dependentes]').should('have.value', '')
//   });

//   it('Cadastrar um novo funcionário , ocorre um erro pois os campos estão vazios', () => {
//     cy.visit('/employees/store');
//     cy.url().should('include', '/employees/store');
//     cy.get('button').contains('Salvar').click();
//     cy.get('span:visible:contains("Campo obrigatório")').should('have.length', 5);
//   });
// });


// describe('Testa o processo de editar um funcionário', () => {
//   it('Cadastrar um novo funcionário com sucesso', () => {
//     cy.visit('/employees');
//     cy.wait(10);
//     //clica em qualquer item da tabela
//     cy.contains('Editar').click();
//     cy.wait(10);
//     cy.url().should('match', /employees\/store\/\d/g);
//     cy.contains('Editar funcionário');
//     cy.get('input[name=nome]').type(Faker.name.firstName() + ' ' + Faker.name.lastName());
//     cy.get('input[name=cpf]').type('11863714049');
//     cy.get('input[name=salario]').type(Faker.datatype.number());
//     cy.get('input[name=desconto]').type(Faker.datatype.number());
//     cy.get('input[name=dependentes]').type(Faker.datatype.number());
//     cy.get('button').contains('Salvar').click();
//   });
// });


describe('Testa o processo de listar os funcionários', () => {
  it('Cadastrar um novo funcionário com sucesso', () => {
    cy.visit('/employees');
    cy.wait(10);
    cy.contains('Funcionários');
    cy.get('tr').should('have.length.greaterThan', 0);
    cy.get('th').should('have.length', 8);
  });
});

describe('Testa o processo de deletar um funcionário', () => {
  it('Cadastrar um novo funcionário com sucesso', () => {
    cy.visit('/employees');
    cy.wait(10);
    cy.contains('deletar').click();
    cy.get('tr').then((row) => {
      let rowBeforeDeleteCount = row.length;
      cy.wait(10);

    })
  });
});
