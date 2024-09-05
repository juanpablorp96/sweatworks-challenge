import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I go to saucedemo.com", () => {
    cy.visit('/');
});

When("I type {string} in the {string} field", (text, field) => {
    cy.get('#' + field).type(text)
});

When("I click on {string}", (button) => {
    cy.get('#' + button).click()
});

Then("I should see {string}", (text) => {
    cy.contains(text).should('be.visible')
});
