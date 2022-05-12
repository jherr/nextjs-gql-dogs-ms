/// <reference types="cypress" />

describe("adoptable dogs app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should have the right title", () => {
    cy.get("#pageTitle").should("include.text", "Oregon");
  });

  it("should filter by sex", () => {
    cy.get("#sexSelector").click();
    cy.get("#sexMale").click();
    cy.get(".dog").should("have.length", 22);
    cy.get(".dog h3").first().should("have.text", "Abra");
  });

  it("should show a list of dogs", () => {
    cy.get(".dog").should("have.length", 49);
    cy.get(".dog h3").first().should("have.text", "Abby");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("check on bug", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".dog").first().click();
    cy.get(":nth-child(2) > .mantine-Text-root").click();
    cy.get(":nth-child(2) > .mantine-Text-root").should(
      "have.text",
      "1 years 6 months"
    );
    /* ==== End Cypress Studio ==== */
  });

  it("should search", () => {
    cy.get(".text-filter").type("bug");
    cy.get(".dog").should("have.length", 1);
    cy.get(".dog h3").first().should("have.text", "Bug");
  });
});
