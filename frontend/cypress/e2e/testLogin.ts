import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Jag är på startsidan', () => {
  cy.visit('http://localhost:5173/');
  cy.get('h1').should('contain', 'Login');
});

When('Jag fyller i användarnamn och lösenord och klickar på login', () => {
  cy.get('input[placeholder="Username"]').type('viktor');
  cy.get('input[placeholder="Password"]').type('passpass');
  cy.get('form').submit();
});

Then('kommer jag till startsidan och kan klicka på phonebook', () => {
  cy.get('h1').should('contain', 'My Phonebook');
  cy.contains('button', 'Phonebook').click();
});
