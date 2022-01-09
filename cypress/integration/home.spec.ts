import { AppComponent } from '../../src/app/app.component';
describe(AppComponent.name, () => {
  beforeEach('Visits root route', () => {
    cy.visit('/');
  });
  it('Should get the navigation bar', () => {
    cy.get('header').get('nav');
  });
})
