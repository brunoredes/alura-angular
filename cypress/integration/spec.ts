import { AppComponent } from '../../src/app/app.component';
import { AppComponent as AppComponentFixture } from '../fixtures/example.json';
describe(AppComponent.name, () => {
  beforeEach('Visits root route', () => {
    cy.visit('/');
  });
  it('Should get the correct HTML title', () => {
    cy.title().should('equal', 'Bytebank');
  });
  it('Should get welcome message', async () => {
    cy.get('h1').contains(`Welcome to ${AppComponentFixture.title}`);
  });
  it('Should get span message', () => {
    cy.get('span').contains(`${AppComponentFixture.title} app is running!`);
  });

  it('should get alt attribute from image', () => {
    cy.get('img').invoke('attr', 'alt').should('equal', 'Angular Logo');
  });
})
