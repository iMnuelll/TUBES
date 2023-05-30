describe("Login Parabank", () => {
  it("Visit the website", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get(':nth-child(2) > .input').type('john')
    cy.get(':nth-child(4) > .input').type('demo')
    cy.get(':nth-child(5) > .button').click()
    cy.get('#leftPanel > ul > :nth-child(1) > a').click()
    cy.get('#type').select('SAVINGS') // Select the 'user-1' option
    cy.get('#fromAccountId').select('13344')
    cy.get('form.ng-valid > div > .button').click()
    cy.get('#newAccountId').click()
    cy.get('#leftPanel > ul > :nth-child(2) > a').click()
  });
});