describe('Test landing page', function () {
  it('visits my site and checks that h1 and correct buttons are in place ', function () {
    cy.visit('http://localhost:5173/');
    cy.get('input[placeholder="Username"]').type('viktor');
    cy.get('input[placeholder="Password"]').type('passpass');
    cy.get('form').submit();
    cy.get('h1').should('exist');

    cy.contains('button', 'Phonebook').should('exist');
    cy.contains('button', 'Add numbers').should('exist');
  });
});

describe('Test landing page functions', function () {
  it('visits my site and checks button functions ', function () {
    cy.visit('http://localhost:5173/');
    cy.get('input[placeholder="Username"]').type('viktor');
    cy.get('input[placeholder="Password"]').type('passpass');
    cy.get('form').submit();

    cy.contains('button', 'Phonebook').should('exist').click();
    cy.get('.modal').should('exist');
    cy.get('.modal').contains('Your contacts').should('exist');

    cy.contains('button', 'Add numbers').should('exist').click();
    cy.get('.modal').should('exist');
    cy.get('.modal').contains('Add number').should('exist');
  });
});
