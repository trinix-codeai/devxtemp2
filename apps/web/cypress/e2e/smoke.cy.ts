describe("home", () => {
  it("renders the hero and navigation", () => {
    cy.visit("/");
    cy.contains("Explore the world with a conversion-first travel experience.");
    cy.contains("Destinations");
  });
});
