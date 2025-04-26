# Intuji-QA-Associate-Challenge


**Project Setup Guide**
-------------------

### **Step 1: Initialize the Project**

Start by setting up a new Node.js project:

`npm -i init`

This will generate a `package.json` file with default settings.

### **Step 2: Install Dependencies**

#### **Cypress**

Install Cypress for end-to-end (E2E) testing:

`npm install cypress --save-dev`

#### **Faker.js**

Install @faker-js/faker to generate random user data for test scenarios:

`npm install --save-dev @faker-js/faker`

### **Step 3: Launch Cypress**

Once Cypress is installed, you can open its test runner with:

`npx cypress open`

This will open the Cypress Test Runner interface in a selected browser.

### **Step 4: Initialize End-to-End (E2E) Testing Configuration**

Within the Cypress Test Runner UI:

1. Select **E2E Testing** when prompted.
2. Cypress will structure the basic file structure and configuration automatically.
3. Sample spec files will be created, and a browser window will open for test execution.

Your project is now ready for E2E testing with Cypress.

**Running Tests**
-------------

Cypress test files are written with the .cy.js extension. Here's how to execute the test cases:

1. Launch Cypress:

   `npx cypress open`
2. In the Cypress Test Runner, navigate to the **Spec** tab.
3. Run individual test files:

* **userFlow.cy.js** – Contains primary user journey and functional test cases.
* **negativeCases.cy.js** – Contains negative test cases (currently includes two).

Tests will execute sequentially based on the defined order within each file.

**Tools and Plugins Used**
----------------------

### **Faker.js**

Used for generating dynamic and random test data. It enhances the robustness of tests by avoiding static values.

* Installation covered in Setup Steps
* Official Documentation: [https://fakerjs.dev/api](https://fakerjs.dev/api)

**Known Limitations**
-----------------

Here are the current limitations identified in the project:

* **No Native Mobile Testing** – Haven’t performed mobile testing.
* **No Multi-Tab or Multi-Browser Testing** – Tests are limited to a single browser tab. Tested only on Chrome browser.
* **Hardcoded Selectors and Values** – Could lead to fragile tests; consider using dynamic selectors or test IDs.
* **Lack of Custom Cypress Commands** – Using reusable Cypress commands can improve test maintainability and readability.
* **Lack of Negative Test Cases** - There can be many other negative test cases that can be tested.
