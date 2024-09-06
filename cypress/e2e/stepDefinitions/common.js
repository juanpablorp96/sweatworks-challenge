import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { parseLocator } from "../../support/utils";


Given("I go to saucedemo.com", () => {
    cy.visit('/');
});

When("I type {string} in {string}", (text, field) => {
    const pageObjectArray = parseLocator(field);
    cy.fixture(`${pageObjectArray[0]}.json`).then((locator) => {
        cy.get(locator[pageObjectArray[1]]).type(text);
    })
});

When("I click on {string}", (button) => {
    const pageObjectArray = parseLocator(button);
    cy.fixture(`${pageObjectArray[0]}.json`).then((locator) => {
        cy.get(locator[pageObjectArray[1]]).click();
    })
});

Then("I should see text {string}", (text) => {
    cy.contains(text).should('be.visible');
});

Then("I should see {string}", (element) => {
    const pageObjectArray = parseLocator(element);
    cy.fixture(`${pageObjectArray[0]}.json`).then((locator) => {
        cy.get(locator[pageObjectArray[1]]).should('be.visible');
    })
});

Then("I should not see {string}", (element) => {
    const pageObjectArray = parseLocator(element);
    cy.fixture(`${pageObjectArray[0]}.json`).then((locator) => {
        cy.get(locator[pageObjectArray[1]]).should('not.exist');
    })
});

Then("I should see {string} with text {string}", (element, text) => {
    const pageObjectArray = parseLocator(element);
    cy.fixture(`${pageObjectArray[0]}.json`).then((locator) => {
        cy.get(locator[pageObjectArray[1]]).should('have.text', text);
    })
});
