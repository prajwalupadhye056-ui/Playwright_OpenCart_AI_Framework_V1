# 🎭 Playwright + TypeScript Automation Framework

A production-grade, multi-layer test automation framework for Web UI, REST API, and Database testing — built with Playwright, TypeScript, and the Page Object Model pattern.

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Allure](https://img.shields.io/badge/Allure-Report-orange)
![Jenkins](https://img.shields.io/badge/Jenkins-CI-D24939?logo=jenkins&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Node](https://img.shields.io/badge/Node-20+-339933?logo=node.js&logoColor=white)

---

## 📖 Table of Contents

1. [Overview](#-overview)
2. [Key Features](#-key-features)
3. [Framework Architecture](#️-framework-architecture)
4. [Project Structure](#-project-structure)
5. [Tech Stack](#️-tech-stack)
6. [Prerequisites](#-prerequisites)
7. [Quick Start](#-quick-start)
8. [Environment Configuration](#-environment-configuration)
9. [Test Suites & Tags](#️-test-suites--tags)
10. [Running Tests](#️-running-tests)
11. [Test Execution Flow](#-test-execution-flow)
12. [Page Object Model](#-page-object-model)
13. [API Testing](#-api-testing)
14. [Database Testing](#️-database-testing)
15. [Data-Driven Testing](#-data-driven-testing)
16. [Reporting](#-reporting)
17. [Docker Setup](#-docker-setup)
18. [CI/CD with Jenkins](#-cicd-with-jenkins)
19. [Utilities](#-utilities)
20. [Coding Guidelines](#-coding-guidelines)
21. [Author](#-author)
22. [License](#-license)

---

## 🎯 Overview

This framework provides a unified, scalable automation solution for testing the OpenCart e-commerce platform across three layers:

| Layer | Technology | What We Test |
|-------|------------|--------------|
| 🌐 Web UI | Playwright + Page Object Model | Customer registration, login/logout, product search, cart management, admin portal |
| 🔌 REST API | Playwright `request` fixture + FakeStoreAPI | Products, users, carts, authentication, schema validation |
| 🗄️ Database | MySQL2 + Admin Portal | End-to-end customer registration with DB verification |

It is designed for CI/CD integration (Jenkins + Docker), supports multiple reporting formats, and follows industry best practices for maintainability and readability.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| ✅ Page Object Model (POM) | 12 reusable page classes for clean test code |
| ✅ Custom Test Fixtures | Type-safe dependency injection for all page objects |
| ✅ Multi-Layer Testing | Web UI + REST API + Database in a single framework |
| ✅ Tag-Based Test Suites | `@sanity`, `@regression`, `@api`, `@web`, `@e2e`, `@master`, `@datadriven` |
| ✅ Data-Driven Testing | CSV, JSON, and Excel test data sources |
| ✅ Random Test Data Generation | Powered by Faker.js |
| ✅ Schema Validation | JSON Schema validation for API responses via AJV |
| ✅ Accessibility Checks | WCAG compliance testing via axe-core |
| ✅ Multiple Reporters | HTML, Allure, JUnit XML, Custom HTML dashboard |
| ✅ Parallel Execution | Fully parallel test execution with configurable workers |
| ✅ CI/CD Ready | Jenkins pipeline + Docker Compose support |
| ✅ Retries & Artifacts | Automatic retries, screenshots, videos, and traces on failure |

---

## 🏗️ Framework Architecture

<!-- Add architecture diagram here -->

---

## 📁 Project Structure

<!-- Add project tree here -->

### 📂 Folder Breakdown

| Path | Purpose |
|------|---------|
| `pages/` | Page Object classes — each encapsulates locators + actions for a page |
| `fixtures/` | Custom Playwright test fixtures for type-safe page object injection |
| `tests/web/` | Web UI test specs (login, registration, cart, search, etc.) |
| `tests/api/` | REST API test specs against FakeStoreAPI |
| `tests/db/` | Database validation tests (MySQL) |
| `api/endpoints/` | Centralized API route definitions |
| `api/schemas/` | JSON Schema files for API response validation |
| `utils/` | Shared utilities (data generation, readers, DB client, custom reporter) |
| `testdata/` | External test data files (CSV, JSON, Excel) |
| `reports/` | Generated HTML + JUnit reports |
| `allure-results/` | Allure-compatible test result files |
| `custom-report/` | Custom HTML dashboard output |
| `test-results/` | Playwright test artifacts (screenshots, videos, traces) |
| `docs/` | Additional documentation |
| `prompts/` | AI prompt templates for test generation |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Playwright | ^1.62.1 | Browser automation & API testing |
| TypeScript | 5.x | Type-safe test code |
| Node.js | 20+ | Runtime |
| Allure Playwright | ^3.10.2 | Allure reporting integration |
| Faker.js | ^10.5.0 | Random test data generation |
| AJV | ^8.20.0 | JSON Schema validation |
| axe-core | ^4.13.0 | Accessibility (WCAG) testing |
| Luxon | ^3.7.2 | Date/time manipulation |
| MySQL2 | ^3.23.3 | MySQL database connectivity |
| csv-parse | ^7.0.2 | CSV file parsing |
| xlsx | ^0.18.5 | Excel file parsing |
| dotenv | ^17.4.2 | Environment variable management |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Version | Required? | Download |
|-------------|---------|-----------|----------|
| Node.js | v20 or later | ✅ Required | [nodejs.org](https://nodejs.org) |
| npm | v9+ (comes with Node.js) | ✅ Required | Bundled with Node.js |
| Git | Latest | ✅ Required | [git-scm.com](https://git-scm.com) |
| Playwright browsers | — | ✅ Required | Installed via setup script |
| Docker Desktop | Latest | ⬜ Optional (containerized execution) | [docker.com](https://www.docker.com/products/docker-desktop/) |
| Java | 11+ | ⬜ Optional (Allure reporting) | [java.com](https://www.java.com) |

---

## 🚀 Quick Start

| Step | Task | Command |
|------|------|---------|
| 1️⃣ | Clone the repository | `git clone <repository-url>` then `cd playwright-opencart-ai` |
| 2️⃣ | Install dependencies | `npm install` |
| 3️⃣ | Install Playwright browsers | `npx playwright install --with-deps` |
| 4️⃣ | Configure environment | `cp .env.example .env` |
| 5️⃣ | Run all tests | `npx playwright test` |

> Edit `.env` with your application URLs and credentials (see [Environment Configuration](#-environment-configuration)).

---

## 🔧 Environment Configuration

The framework uses a `.env` file for all configurable settings. Copy `.env.example` to `.env` and update the values:

```env
# Environment
APP_ENV=qa                          # qa | prod | dev

# Web Application
WEB_APP_URL=https://awesomeqa.com/ui/
APP_EMAIL=your-email@example.com
APP_PASSWORD=your-password

# Product Details (for cart tests)
PRODUCT_NAME=MacBook
PRODUCT_QUANTITY=1
TOTAL_PRICE=$602.00

# API (FakeStoreAPI)
API_BASE_URL=https://fakestoreapi.com
USERNAME=mor_2314
PASSWORD=83r5^_
USER_ID=1
PRODUCT_ID=1
CART_ID=1
LIMIT=3
START_DATE=2019-12-10
END_DATE=2020-10-10

# Database (MySQL)
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your-db-password
DB_NAME=opencart

# Admin Portal
ADMIN_URL=http://localhost/opencart/upload/admin/index.php
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

### Variable Reference

| Group | Variable | Example Value |
|-------|----------|---------------|
| Environment | `APP_ENV` | `qa` (`qa` \| `prod` \| `dev`) |
| Web Application | `WEB_APP_URL` | `https://awesomeqa.com/ui/` |
| Web Application | `APP_EMAIL` | `your-email@example.com` |
| Web Application | `APP_PASSWORD` | `your-password` |
| Product Details | `PRODUCT_NAME` | `MacBook` |
| Product Details | `PRODUCT_QUANTITY` | `1` |
| Product Details | `TOTAL_PRICE` | `$602.00` |
| API (FakeStoreAPI) | `API_BASE_URL` | `https://fakestoreapi.com` |
| API (FakeStoreAPI) | `USERNAME` | `mor_2314` |
| API (FakeStoreAPI) | `PASSWORD` | `83r5^_` |
| API (FakeStoreAPI) | `USER_ID` | `1` |
| API (FakeStoreAPI) | `PRODUCT_ID` | `1` |
| API (FakeStoreAPI) | `CART_ID` | `1` |
| API (FakeStoreAPI) | `LIMIT` | `3` |
| API (FakeStoreAPI) | `START_DATE` | `2019-12-10` |
| API (FakeStoreAPI) | `END_DATE` | `2020-10-10` |
| Database (MySQL) | `DB_HOST` | `localhost` |
| Database (MySQL) | `DB_PORT` | `3306` |
| Database (MySQL) | `DB_USER` | `root` |
| Database (MySQL) | `DB_PASSWORD` | `your-db-password` |
| Database (MySQL) | `DB_NAME` | `opencart` |
| Admin Portal | `ADMIN_URL` | `http://localhost/opencart/upload/admin/index.php` |
| Admin Portal | `ADMIN_USERNAME` | `admin` |
| Admin Portal | `ADMIN_PASSWORD` | `admin123` |

---

## 🏷️ Test Suites & Tags

Tests are organized using Playwright's tag system (`@tag-name` in test titles). Each tag maps to a reusable npm script:

| Tag | npm Script | Description |
|-----|------------|-------------|
| `@master` | `npm run test:master` | Master suite — all critical tests |
| `@sanity` | `npm run test:sanity` | Sanity checks — quick smoke tests |
| `@regression` | `npm run test:regression` | Full regression — comprehensive coverage |
| `@web` | `npm run test:web` | Web UI tests only |
| `@api` | `npm run test:api` | API tests only |
| `@e2e` | `npm run test:e2e` | End-to-end scenarios |
| `@datadriven` | `npm run test:datadriven` | Data-driven tests |

Tests can carry multiple tags for flexible execution:

```ts
test('Valid Login Flow @master @sanity @regression @web', async (...) => { ... });
test('GET - All Products @master @sanity @api', async (...) => { ... });
test('Register customer, verify in admin portal and MySQL @master @end-to-end @db', async (...) => { ... });
```

---

## ▶️ Running Tests

| Goal | Command |
|------|---------|
| Run all tests | `npx playwright test` |
| Sanity tests only | `npm run test:sanity` |
| Regression tests | `npm run test:regression` |
| Web UI tests | `npm run test:web` |
| API tests | `npm run test:api` |
| End-to-end tests | `npm run test:e2e` |
| Master suite | `npm run test:master` |
| Data-driven tests | `npm run test:datadriven` |
| Headed mode (browser visible) | `npm run test:master:headed` |
| Debug mode (opens Playwright Inspector) | `npm run test:sanity:debug` |
| Single test file | `npx playwright test tests/web/valid-login.spec.ts` |
| Specific project / browser | `npx playwright test --project=chromium` |
| Custom tag filter (grep) | `npx playwright test --grep "@sanity"` |
| Multiple tags (grep) | `npx playwright test --grep "@api\|@web"` |
| CI mode (headless, 2 retries, 1 worker) | `set CI=true && npx playwright test` |

---

## 🔄 Test Execution Flow

<!-- Add execution flow diagram here -->

---

## 📄 Page Object Model

The framework uses the Page Object Model (POM) pattern to separate test logic from page-specific implementation details.

### How It Works

Each web page gets its own Page Object class that encapsulates:

| Element | Description |
|---------|-------------|
| Locators | CSS selectors / Playwright getters for elements |
| Actions | Methods that perform operations (click, fill, select) |
| Verifications | Methods that check state (`isVisible`, `getText`) |

### Available Page Objects

| Class | File | Key Methods |
|-------|------|-------------|
| `HomePage` | `pages/HomePage.ts` | `navigateTo()`, `searchProduct()`, `clickLogin()`, `clickRegister()` |
| `LoginPage` | `pages/LoginPage.ts` | `login()`, `isLoginPageExists()`, `getWarningMessage()` |
| `RegisterPage` | `pages/RegisterPage.ts` | `completeRegistration()`, `isRegisterPageExists()` |
| `MyAccountPage` | `pages/MyAccountPage.ts` | `isMyAccountPageExists()`, `isAuthenticated()`, `clickLogout()` |
| `SuccessPage` | `pages/SuccessPage.ts` | `isSuccessPageExists()`, `getSuccessHeadingText()` |
| `LogoutPage` | `pages/LogoutPage.ts` | `isLogoutPageExists()`, `clickContinue()` |
| `SearchResultsPage` | `pages/SearchResultsPage.ts` | `isProductDisplayed()`, `getSearchHeadingText()` |
| `ProductPage` | `pages/ProductPage.ts` | `getProductName()`, `getProductPrice()`, `addToCart()` |
| `CartPage` | `pages/CartPage.ts` | `isCartPageExists()`, `isProductInCart()`, `getTotalPrice()` |
| `AdminLoginPage` | `pages/AdminLoginPage.ts` | `login()`, `isAdminLoginPageExists()` |
| `AdminCustomersPage` | `pages/AdminCustomersPage.ts` | `dismissSecurityModal()`, `searchByEmail()`, `clickEditCustomer()` |
| `AdminCustomerEditPage` | `pages/AdminCustomerEditPage.ts` | `isEditCustomerPageExists()`, `getFirstNameValue()` |

### Example: Page Object

```ts
// pages/LoginPage.ts
export class LoginPage {
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.emailInput = page.locator("#input-email");
    this.passwordInput = page.locator("#input-password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isLoginPageExists(): Promise<boolean> {
    return await this.loginHeading.isVisible();
  }
}
```

### Custom Fixtures (Dependency Injection)

Page objects are injected into tests via custom fixtures (`fixtures/pageFixtures.ts`), providing type-safe, automatic initialization:

```ts
// fixtures/pageFixtures.ts
import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

export const test = base.extend({
  homePage: async ({ page }, use) => {
    await page.goto(APP_URL);
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from "@playwright/test";
```

### Example: Test Using Fixtures

```ts
// tests/web/valid-login.spec.ts
import { test, expect } from "../../fixtures/pageFixtures";
import { Helper } from "../../utils/helper";

test("Valid Login Flow @master @sanity @regression @web", async ({
  homePage,
  loginPage,
  myAccountPage,
}) => {
  const { email, password } = Helper.getLoginDetails();

  await test.step("1) Open the application", async () => {
    await homePage.navigateTo(process.env.WEB_APP_URL!);
  });

  await test.step("2) Navigate to My Account → Login", async () => {
    await homePage.clickMyAccount();
    await homePage.clickLogin();
  });

  await test.step("3) Enter valid credentials and submit", async () => {
    await loginPage.login(email, password);
  });

  await test.step("4) Verify successful authentication", async () => {
    const isAuth = await myAccountPage.isAuthenticated();
    expect(isAuth).toBeTruthy();
  });
});
```

---

## 🌐 API Testing

The framework tests the [FakeStoreAPI](https://fakestoreapi.com) — a free REST API for e-commerce.

### API Layer Structure

| Path | Purpose |
|------|---------|
| `api/endpoints/routes.ts` | Centralized route definitions |
| `api/schemas/product_api_schema.json` | Product response schema |
| `api/schemas/user_api_schema.json` | User response schema |
| `api/schemas/cart_api_schema.json` | Cart response schema |

### Route Definitions

All API endpoints are centralized in `api/endpoints/routes.ts`:

```ts
export const Routes = {
  BASE_URL: "https://fakestoreapi.com",
  GET_ALL_PRODUCTS: "/products",
  GET_PRODUCT_BY_ID: "/products/{id}",
  CREATE_PRODUCT: "/products",
  GET_ALL_USERS: "/users",
  GET_ALL_CARTS: "/carts",
  AUTH_LOGIN: "/auth/login",
  // ... more routes
};
```

### API Test Example

```ts
// tests/api/products.spec.ts
import { test, expect } from "@playwright/test";
import { Routes } from "../../api/endpoints/routes";

test("GET - All Products @master @sanity @api", async ({ request }) => {
  const response = await request.get(`${BASE_URL}${Routes.GET_ALL_PRODUCTS}`);
  expect(response.status()).toBe(200);

  const products = await response.json();
  expect(Array.isArray(products)).toBeTruthy();
  expect(products.length).toBeGreaterThan(0);

  products.forEach((product: any) => {
    expect(product).toHaveProperty("id");
    expect(product).toHaveProperty("title");
    expect(product).toHaveProperty("price");
  });
});
```

### API Test Coverage

| Test File | Endpoints Covered |
|-----------|-------------------|
| `products.spec.ts` | GET all, GET by ID, CRUD operations |
| `users.spec.ts` | GET all, GET by ID, CRUD operations |
| `carts.spec.ts` | GET all, GET by ID, CRUD operations |
| `auth.spec.ts` | POST login authentication |
| `schema-validation.spec.ts` | JSON Schema validation for all endpoints |
| `product-crud-workflow.spec.ts` | Full CRUD workflow for products |
| `user-crud-workflow.spec.ts` | Full CRUD workflow for users |
| `cart-crud-workflow.spec.ts` | Full CRUD workflow for carts |

---

## 🗄️ Database Testing

The framework validates data persistence by querying MySQL directly via the `mysql2` library.

### DB Client

```ts
// utils/dbClient.ts
import mysql from "mysql2/promise";

export async function executeQuery(sql: string, params?: any[]) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  const [result] = await connection.execute(sql, params);
  await connection.end();
  return result;
}
```

### E2E Test Flow (UI → Admin → DB)

The `customer-registration-e2e.spec.ts` demonstrates a three-layer validation:

| Step | Layer | Action |
|------|-------|--------|
| 1 | 🌐 Web UI | Register a new customer via the registration page |
| 2 | 🖥️ Admin Portal | Log in as admin, search by email, and confirm the customer appears in the table |
| 3 | 🗄️ MySQL | Query `oc_customer` by email and verify exactly one row with the expected first name |

```ts
// Step 1: Register via UI
await registerPage.completeRegistration(
  firstName,
  lastName,
  email,
  telephone,
  password,
);

// Step 2: Verify in Admin Portal
await adminLoginPage.login(ADMIN_USERNAME, ADMIN_PASSWORD);
await adminCustomersPage.searchByEmail(email);
const isFound = await adminCustomersPage.isCustomerInTable(email);

// Step 3: Verify in MySQL
const rows = await executeQuery("SELECT * FROM oc_customer WHERE email = ?", [
  email,
]);
expect(rows.length).toBe(1);
expect(rows[0].firstname).toBe(firstName);
```

---

## 📊 Data-Driven Testing

The framework supports three external data formats for data-driven tests:

| Format | Reader | File Example |
|--------|--------|--------------|
| CSV | `DataProvider.readCsv()` | `testdata/opencart_logindata.csv` |
| JSON | `DataProvider.readJson()` | `testdata/opencart_logindata.json` |
| Excel | `DataProvider.readExcel()` | `testdata/opencart_logindata.xlsx` |

### Data Reader Utility

```ts
// utils/DataReader.ts
export class DataProvider {
  static readJson(filePath: string) {
    /* ... */
  }
  static readCsv(filePath: string) {
    /* ... */
  }
  static readExcel(filePath: string) {
    /* ... */
  }
}
```

### Random Data Generation

For non-deterministic test data, use the `RandomDataUtil` class powered by Faker.js:

```ts
import { RandomDataUtil } from "../../utils/dataGenerator";

const firstName = RandomDataUtil.getFirstName();
const lastName = RandomDataUtil.getLastName();
const email = RandomDataUtil.getEmail();
const password = RandomDataUtil.getPassword(12);
const phone = RandomDataUtil.getPhoneNumber();
const address = RandomDataUtil.getStreetAddress();
```

| Method | Generates |
|--------|-----------|
| `getFirstName()` | Random first name |
| `getLastName()` | Random last name |
| `getEmail()` | Random email address |
| `getPassword(length)` | Random password of the given length |
| `getPhoneNumber()` | Random phone number |
| `getStreetAddress()` | Random street address |

---

## 📊 Reporting

The framework generates four types of reports simultaneously:

| # | Report | Output Location | How to View |
|---|--------|-----------------|-------------|
| 1️⃣ | Playwright HTML Report | `reports/index.html` | `open reports/index.html` |
| 2️⃣ | Allure Report | `allure-report/` | `npx allure generate allure-results --clean -o allure-report` then `npx allure open allure-report` |
| 3️⃣ | JUnit XML Report | `reports/results.xml` | Consumed by Jenkins CI (test trend graph) |
| 4️⃣ | Custom HTML Dashboard | `custom-report/index.html` | Open in a browser |

### Custom HTML Dashboard

A custom reporter (`utils/CustomReporter.ts`) generates a branded HTML dashboard with:

| Dashboard Feature | Details |
|-------------------|---------|
| Statistics | Test pass / fail / skip counts |
| Step details | Step-by-step execution details |
| Failure evidence | Screenshot attachments on failure |
| Logs | Console logs per test step |
| Artifacts | Video and trace links |
| Visuals | Timeline and chart visualizations |

---

## 🐳 Docker Setup

Run tests in a consistent, isolated container environment — no local dependencies needed.

### Build the Image

```bash
docker compose build
```

### Run Test Suites

| Suite | Command |
|-------|---------|
| All tests | `docker compose run --rm playwright-tests` |
| Sanity | `docker compose run --rm playwright-tests sanity` |
| Regression | `docker compose run --rm playwright-tests regression` |
| Web | `docker compose run --rm playwright-tests web` |
| API | `docker compose run --rm playwright-tests api` |
| Master | `docker compose run --rm playwright-tests master` |
| E2E | `docker compose run --rm playwright-tests e2e` |
| Data-driven | `docker compose run --rm playwright-tests datadriven` |

### Pass Extra Playwright Arguments

```bash
docker compose run --rm playwright-tests web --headed --workers 2
```

### Key Docker Features

| Feature | Benefit |
|---------|---------|
| Layer caching | `package*.json` copied first, so `npm ci` is cached unless deps change |
| Bind mounts | Reports and artifacts persist on the host |
| Container-only `node_modules` | Not shadowed by the host bind mount |
| Entrypoint script | Maps suite names to npm scripts automatically |

---

## 🚇 CI/CD with Jenkins

The project includes a declarative Jenkins pipeline (`Jenkinsfile`) for Windows build agents.

### Pipeline Parameters

| Parameter | Choices | Description |
|-----------|---------|-------------|
| `TEST_SUITE` | `test:e2e`, `test:master`, `test:sanity`, `test:regression`, `test:api`, `test:web`, `test:datadriven` | Which tests to run |
| `BROWSER` | `chromium`, `firefox`, `webkit` | Browser selection |
| `MODE` | `headless`, `headed` | Headless or headed mode |

### Post-Build Actions

| Action | Status |
|--------|--------|
| Archives HTML reports | ✅ |
| Publishes JUnit XML results (test trend graph) | ✅ |
| Generates and publishes Allure reports | ✅ |
| Sends email notifications with status and report links | ✅ |
| Cleans up `allure-results` on success | ✅ |

---

## 🔧 Utilities

| Utility | File | Purpose |
|---------|------|---------|
| `RandomDataUtil` | `utils/dataGenerator.ts` | Generate random names, emails, passwords, addresses, dates via Faker.js |
| `DataProvider` | `utils/DataReader.ts` | Read test data from CSV, JSON, and Excel files |
| `Helper` | `utils/helper.ts` | Price string-to-number conversion, static test data helpers |
| `executeQuery` | `utils/dbClient.ts` | Execute MySQL queries with parameterized inputs |
| `CustomReporter` | `utils/CustomReporter.ts` | Custom Playwright reporter generating a rich HTML dashboard |

---

## 📋 Coding Guidelines

- Follow the Page Object Model pattern for all UI interactions
- Use tags (`@tag`) to categorize every test
- Write descriptive test names and use `test.step()` for multi-step scenarios
- Keep locators in page objects — never in test files
- Use fixtures for dependency injection — never instantiate page objects manually
- Add JSDoc comments to all public methods
- Run `npx playwright test` locally before submitting

---

## 👨‍🏫 Author

**Mr. Prajwal**
QA Automation Engineer

---

## 📄 License

This project is licensed under the ISC License.
