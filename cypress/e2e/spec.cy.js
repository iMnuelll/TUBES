describe("Login Parabank", () => {
  it("Visit the website", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get(':nth-child(2) > .input').type('john')
    cy.get(':nth-child(4) > .input').type('demo')
    cy.get(':nth-child(5) > .button').click() 
    cy.get('#leftPanel > ul > :nth-child(7) >a').click()
    cy.get('#amount').type(1000)
  });

});
