# Playwright E2E Framework

This project is a Playwright-based end-to-end test automation framework for validating the Rahul Shetty Academy shopping flow.

## What this framework tries to do

The goal of this framework is to automate a real user journey from login through checkout and order verification. It demonstrates:

- Login with test credentials
- Product selection and cart actions
- Checkout and order placement
- Order confirmation and order history verification
- Reusable page object model (POM) design
- Global setup and teardown for lifecycle management
- Credential storage outside of test code to avoid hardcoding

## Features

- End-to-end browser automation with Playwright
- Page Object Model (POM) structure for better maintainability
- Centralized user credentials in the utilities folder
- Global setup and teardown support for authentication lifecycle flow
- HTML reporting support
- Trace support for debugging failed runs

## Project structure

- `tests/e2e/` - End-to-end test specifications and page objects
  - `ecommerce-purchase.spec.ts` - Main purchase flow test
  - `pages/` - Page object classes for each application page
  - `global.setup.spec.ts` - Global setup flow
  - `global.teardown.spec.ts` - Global teardown flow
- `utilities/` - Shared test assets such as credentials
  - `user-credentials.json` - User login details
  - `README.md` - Project overview
- `playwright.config.ts` - Playwright configuration and project setup
- `package.json` - Project scripts and dependencies

## How to run

Install dependencies:

```bash
npm install
```

Run the E2E suite:

```bash
npm run test:e2e
```

Run in headed mode:

```bash
npm run test:e2e:headed
```

Generate the HTML report:

```bash
npx playwright test --reporter=html
```
