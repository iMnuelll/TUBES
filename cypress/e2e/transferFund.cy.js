describe("Transfer funds", () => {
  it("Transfer funds between account", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get(':nth-child(2) > .input').type('john')
    cy.get(':nth-child(4) > .input').type('demo')
    cy.get(':nth-child(5) > .button').click() 
    cy.get('#leftPanel > ul > :nth-child(2) >a').click()
    cy.get('#leftPanel > ul > :nth-child(3) >a').click()
    cy.get('#fromAccountId').select('13344')
    cy.get('#amount').type('1000')
    cy.get('#toAccountId').select('13455')
    cy.get(':nth-child(4) > .button').click()
    cy.get('#leftPanel > ul > :nth-child(2) > a').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
  });
});
