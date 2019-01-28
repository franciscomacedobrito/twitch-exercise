describe('Search Screen', () => {

  beforeEach(() => {
  });

  it('should be possible to search and open a stream', () => {
    cy.visit('/search');
    fillInput(cy.getSearchInput, 'Rocket league');
    cy.getSearchForm().submit();
    cy.wait(100);
    cy.getStreamList().should('have.length.greaterThan', 1);
    cy.getStreamByIndex(0).click();
    cy.location('pathname').should('eq', '/watch');
    cy.getSearchInput().should('have.value', '');
    cy.go('back');
    cy.getSearchInput().should('have.value', 'Rocket league');
    cy.getStreamList().should('have.length.greaterThan', 1);
    cy.go('back');
    cy.location('pathname').should('eq', '/');
  });

  it('should search for a stream if user is on watch view', () => {
    cy.visit('/watch');
    fillInput(cy.getSearchInput, 'Rocket league');
    cy.getSearchForm().submit();
    cy.wait(100);
    cy.getStreamList().should('have.length.greaterThan', 1);
  });

  function focusOnInput(inputSelector) {
    let inputElement = inputSelector();
    inputElement.focus();
    inputElement.click();
    return inputElement;
  }

  function fillInput(inputSelector, text) {
    let inputElement = focusOnInput(inputSelector);
    inputElement.type(text);
    cy.wait(100);
    return inputElement;
  }
});
