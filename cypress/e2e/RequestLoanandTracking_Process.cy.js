describe("Login Parabank", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get(':nth-child(2) > .input').type('john')
    cy.get(':nth-child(4) > .input').type('demo')
    cy.get(':nth-child(5) > .button').click()
  })

  it("Visit the website", () => {
   

    cy.get('#leftPanel > ul > :nth-child(7) > a').click()
    cy.get('#amount').type(1000)
    cy.get('#downPayment').type(500)
    cy.get('#fromAccountId').select('13344')
    cy.get('[colspan="2"] > .button').click()
    cy.get('#newAccountId').click()
    cy.get('#leftPanel > ul > :nth-child(2) > a').click()
  });
});
  