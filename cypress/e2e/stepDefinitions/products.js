import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { formatDynamicLocator } from "../../support/utils";


When("I add product {string} to cart", (productName) => {
    cy.fixture('productsPage.json').then((locator) => {
        cy.get(formatDynamicLocator(locator.addToCartButton, productName)).click();
    })
});

When("I remove product {string} from cart", (productName) => {
    cy.fixture('productsPage.json').then((locator) => {
        cy.get(formatDynamicLocator(locator.removeButton, productName)).click();
    })
});

Then("I should see remove button for product {string}", (productName) => {
    cy.fixture('productsPage.json').then((locator) => {
        cy.get(formatDynamicLocator(locator.removeButton, productName)).should('be.visible');
    })
});

Then("I should not see remove button for product {string}", (productName) => {
    cy.fixture('productsPage.json').then((locator) => {
        cy.get(formatDynamicLocator(locator.removeButton, productName)).should('not.exist');
    })
});
