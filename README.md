# Playwright E2E Automation Framework

## Overview

This project is an End-to-End (E2E) Test Automation Framework built using **Playwright with JavaScript/TypeScript** to automate the Rahul Shetty Academy eCommerce application.

The framework demonstrates a complete user purchase journey, starting from authentication and ending with order verification in the order history section.

This project was developed using:

- Playwright
- JavaScript / TypeScript
- Page Object Model (POM)
- GitHub Copilot Chat
- Large Language Model (LLM) assisted development
- MCP (Model Context Protocol) concepts
- VS Code

The objective was to explore how AI-assisted development can accelerate framework creation while following automation testing best practices.

---

## Project Goals

This framework aims to:

- Automate a real-world eCommerce purchase flow
- Demonstrate Playwright automation capabilities
- Implement Page Object Model (POM) architecture
- Maintain reusable and scalable automation code
- Manage test data separately from test scripts
- Showcase AI-assisted framework development using GitHub Copilot

---

## Features

### Automation Features

- Login automation
- Product selection and cart validation
- Checkout flow automation
- Order placement verification
- Order history verification

### Framework Features

- Playwright Test Runner
- TypeScript Support
- Page Object Model (POM)
- Global Setup and Teardown
- Centralized Test Data
- HTML Reporting
- Trace Collection
- Headed and Headless Execution
- Reusable Page Classes

### AI-Assisted Development

This framework was created with support from:

- GitHub Copilot Chat
- LLM-powered code suggestions
- MCP-based experimentation and learning
- AI-assisted README and framework design generation

The goal was to understand how modern AI tools can improve automation engineering productivity while maintaining framework quality and readability.

---

## Project Structure

```text
Day1_Hands_On
│
├── tests
│   └── e2e
│       ├── ecommerce-purchase.spec.ts
│       ├── global.setup.spec.ts
│       ├── global.teardown.spec.ts
│       │
│       └── pages
│           ├── LoginPage.ts
│           ├── ProductsPage.ts
│           ├── CartPage.ts
│           ├── CheckoutPage.ts
│           ├── OrderConfirmationPage.ts
│           └── OrdersHistoryPage.ts
│
├── utilities
│   ├── user-credentials.json
│   └── README.md
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── .gitignore
