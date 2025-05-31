describe('My First Test Suite', () => {
    it('My First Test Case', () => {
        cy.visit('/');
        cy.contains('h1','Hello World');
    });
});