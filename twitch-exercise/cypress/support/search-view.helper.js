Cypress.Commands.add('getSearchInput', () => {
  return cy.get('.search-input');
});

Cypress.Commands.add('getSearchForm', () => {
  return cy.get('.search-form');
});

Cypress.Commands.add('getStreamList', () => {
  return cy.get('stream-card');
});

Cypress.Commands.add('getStreamByIndex', (index) => {
  return cy.getStreamList().eq(index);
});
