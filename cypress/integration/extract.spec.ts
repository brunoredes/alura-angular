describe('Extract Component', () => {
  beforeEach('Visits root route', () => {
    cy.visit('/nova-transferencia');
  });
  describe('Basics screen frame and its components', () => {
    it('Should render new transfer form', () => {
      cy.get('section').get('form');
    });
    it('Should get new transfer title', () => {
      cy.get('fieldset').get('legend').contains('Nova Transferência');
    });
    it('Should get div formulary field', () => {
      cy.get('div').should('have.class', 'form-field');
    });
    it('Should put mouseover submit button to get hover button', () => {
      cy.get('button').trigger('mouseover');
    });
  });
  describe('Fill form', () => {
    it('Should fill the "value" input and write a value', () => {
      cy.get('label').should('have.attr', 'for');
      cy.get('#valor').should('have.id', 'valor').type('100').should('have.value', '100');
    });
    it('Should get the "recipient" input and write a value', () => {
      cy.get('label').should('have.attr', 'for');
      cy.get('#destino').should('have.id', 'destino').type('1010-1').should('have.value', '1010-1');
    });

  });
  describe('Send form', () => {
    it('Should submit the form', () => {
      cy.get('label').should('have.attr', 'for');
      cy.get('#valor').should('have.id', 'valor').type('100').should('have.value', '100');
      cy.get('label').should('have.attr', 'for');
      cy.get('#destino').should('have.id', 'destino').type('1010-1').should('have.value', '1010-1');
      cy.get('button').click();
    });
  });

});