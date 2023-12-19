describe("template spec", () => {
  
  it("GET call", () => {
    cy.visit("https://demo.realworld.io");

    cy.intercept(
      {
        method: "GET",
        url: "**/api/tags",
      },
      {
        fixrures: "tags.json",
      }
    );
      cy.reload();
      cy.get(".tag-list")
      .should("contain", "cypress")
      .and("contain", "welcome")
      .and("contain", "introduction");

  });
 
  it('Add Article', () => {
    cy.visit("https://demo.realworld.io");

    cy.contains('Sign in').click()
    cy.get("[placeholder='Article Title']").type(
      "Cypress Hooks"
    );
    cy.get('input[placeholder="What\'s this article about?"').type(
      "Introduction"
    );
    cy.get('textarea[placeholder="Write your article (in markdown)"]').type(
      "Cypress is ana utomated web testing tool for testing web application components automatically."
    );
    cy.get("input[placeholder='Enter tags']").type("Cypress");
    cy.screenshot({blackout:["input[placeholder='Article Title']"]})
    cy.contains("button", "Publish Article").click();
  });
});
