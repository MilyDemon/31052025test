describie('my first test suite', () => {
    it('My first test Case', () => {
        cy.visit('/');
        cy.contains('h1', 'Hello World');
    });
});