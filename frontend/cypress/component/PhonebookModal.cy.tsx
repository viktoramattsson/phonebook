import PhonebookModal from '../../src/Components/PhonebookModal';

describe('PhonebookModal.cy.tsx', () => {
  it('mounts component and render a list', () => {
    cy.mount(<PhonebookModal onClose={() => {}} />);
    cy.get('td').should('exist');
  });
});
