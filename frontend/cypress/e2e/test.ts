import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Jag är på admin-sidan', () => {
  cy.visit('http://localhost:5173/');
  cy.contains('button', 'Phonebook').click();
});

When('When Jag fyller i namn och telefonnummer samt klickar på skicka', () => {
  cy.get('input[placeholder="name"]').type('Test Test');
  cy.get('input[placeholder="number"]').type('0707123123');
  cy.get('form').submit();
});

Then('får jag bekräftelse på att kontakten har lagts till', () => {
  cy.intercept('POST', '/add').as('addContact');

  cy.wait('@addContact').then((interception) => {
    const responseBody = interception.response.body;

    expect(responseBody).to.include('Contact added');
  });
});
