describe("Bill Pay", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get(':nth-child(2) > .input').type('john')
    cy.get(':nth-child(4) > .input').type('demo')
    cy.get(':nth-child(5) > .button').click()
  })
  it("choose the menu", () => {
    cy.get('#leftPanel > ul > :nth-child(4) > a').click()
    cy.get(':nth-child(1) > [width="20%"] > .input').type('nama saya')
    cy.get(':nth-child(2) > [width="20%"] > .input').type('jalan griya alifa')
    cy.get(':nth-child(3) > [width="20%"] > .input').type('tangerang')
    cy.get(':nth-child(4) > [width="20%"] > .input').type('jawa barat')
    cy.get(':nth-child(5) > [width="20%"] > .input').type('51662')
    cy.get(':nth-child(6) > [width="20%"] > .input').type('0867862831')
    cy.get(':nth-child(8) > :nth-child(2) > .input').type('13344')
    cy.get(':nth-child(9) > [width="20%"] > .input').type('13344')
    cy.get(':nth-child(11) > [width="20%"] > .input').type('50000')
    cy.get(':nth-child(13) > :nth-child(2) > .input').select('13344')
    cy.get(':nth-child(14) > :nth-child(2) > .button').click()
  })
});