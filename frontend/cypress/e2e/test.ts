import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Jag är på admin-sidan', () => {
  cy.visit('http://localhost:5173/');
  cy.contains('button', 'Add numbers').click();
});

When('Jag fyller i namn och telefonnummer samt klickar på skicka', () => {
  console.log('Starting When step...');
  cy.intercept('POST', '/add').as('addContact');
  cy.get('input[placeholder="name"]').type('Test Test');
  cy.get('input[placeholder="number"]').type('0707123123');
  cy.get('.postForm').submit();
  console.log('When step completed.');
});

When(
  'Jag fyller i namn på kontakten som ska tas bort och klickar på radera',
  () => {
    cy.intercept('DELETE', '/delete').as('deleteContact');
    cy.get('input[placeholder="Name to delete"]').type('Test Test');
    cy.get('.deleteForm').submit();
  }
);

Then('får jag bekräftelse på att kontakten har lagts till', () => {
  cy.wait('@addContact').then((interception) => {
    cy.log('Interception:', interception);
    const contentType = interception.response.headers['content-type'];
    cy.log('Content-Type:', contentType);
    const responseBody = interception.response.body;
    cy.log('Response body:', responseBody);
    expect(contentType).to.include('application/json');
  });
});

Then('får jag bekräftelse på att kontakten är borttagen', () => {
  cy.wait('@deleteContact').then((interception) => {
    const responseBody = interception.response.body;

    expect(responseBody).to.deep.equal({ message: 'Contact deleted' });
  });
});
