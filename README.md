# SweatWorks QA Automation Challenge
## Prerequisites
[Node.js](https://nodejs.org/) v20.11.0 or later
## Installation

```sh
npm install
```

## Run tests
Chrome headless
```sh
npm run e2e:chrome
```
Chrome headed
```sh
npm run e2e:chromeHeaded
```
Firefox headless
```sh
npm run e2e:firefox
```
Firefox headed
```sh
npm run e2e:firefoxHeaded
```
## Project
The main objective of this solution was to integrate Cypress as a testing framework for automating end-to-end tests, complemented by the Cucumber plugin to improve readability and organization of the tests by using Gherkin, a natural language that allows writing test scenarios in a clear and understandable way. Additionally, I incorporated the Page Object Model (POM) design pattern to enhance the maintainability and scalability of the test automation suite.
```
/sweatworks-challenge
├── cypress
    ├── e2e
        ├── features // Gherkin tests
        ├── stepDefinitions // Steps implementations
    ├── fixtures // Locators (POM)
    ├── support
├── cypress.config.js
├── package-lock.json
└── package.json
```
## Troubleshooting
https://github.com/cypress-io/cypress/issues/27501
There's a known issue with Cypress when testing the saucedemo site.
Even though the page loads, cypress gets stuck and fails with:
> `Your page did not fire its load event within 60000ms`

This is because there's an API that always respond with a HTTP 401 status.
A contributor suggested a workaround that I implemented in the `cypress.config.js` file to block this problematic response.
If the issue persists, try removing this folder:
~/.../Cypress/cy/production/browsers/chrome-stable/interactive/Default/Service Worker/CacheStorage

https://github.com/badeball/cypress-cucumber-preprocessor/issues/1215
When installing the dependencies you may see a warning message related to some deprecated dependencies.
There's an open issue for that, hopefully they will fix it soon.
