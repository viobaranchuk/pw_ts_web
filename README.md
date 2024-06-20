## Volvo Safety-Highlights Automation set-up
The automation testing project uses Playwright framework with page object pattern and Docker images, GitHub actions CI set-up for https://www.volvocars.com/intl/v/safety/highlights

## System Requirements
 * **Node.js v16.15.1 or greater (https://nodejs.org/)** should be installed

## How to run tests locally
 * **npx playwright install --with-deps** : Installs Platwright with dependencies and browsers according to project configuration in package.json and package-lock.json
 * **npx playwright test** : Runs the end-to-end tests in headless mode
 * **npx playwright test --headed** : Runs the end-to-end tests in browser
 * **npx playwright test --project chromium** : Runs the end-to-end tests in specific browser/browser engine
 * **npx playwright test example.spec.js** : Runs the tests in a specific file
 * **npx playwright test  --debug** : Runs the tests in debug mode
 * **npx playwright show report** : Open playwright report
 * **npx playwright test --workers 3** : Run with 3 workers in parellel

 ## PLEASE NOTE: 
 * Chromium and Webkit tests cannot be run locally due to security restrictions of webpage
 * Test work as expected on Docker in GitHub Action’s CI workflow

## How to run test-cases with the local Docker
 * **docker build -t playwright-tests .** : Builds Docker image
 * **docker run playwright-tests** : Runs the container from the built image

## How to run Playwright tests on Docker in GitHub Action’s CI workflow
 * .github/workflows/playwright.yml is a configuration file for GitHub Action’s CI workflow

## Parallel execution
Parallel execution of tests realized by **fullyParallel: true** capability in the playwright.config.js file. Every single test file will be run in parallel. 3 workers are used for CI runs according to current settings. playwright.config.js can be configured browsers and platforms according to project requirements via playwright.config.js. 

## Results Reporting
Report of the test cases/suites run is set as Html in a playwright-report folder. The reporter can be set in another format: reporter capability in playwright.config.js. 