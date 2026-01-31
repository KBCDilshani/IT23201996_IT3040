# IT3040 – Playwright Automation Assignment

This project is developed as part of **IT3040 – Playwright Automation** module.  
It demonstrates automation of test cases using **Playwright** with test data managed in **Excel** files.

---

## Project Structure

IT23201996_ASSIGNMENT_1/
│
├── .github/ # GitHub configuration files
├── node_modules/ # Node.js dependencies
├── playwright-report/ # Playwright HTML test reports
├── scripts/
│ └── excel-to-json.js # Script to convert Excel test data to JSON
├── test-data/
│ ├── cases.json # Original test cases in JSON
│ └── cases.updated.json # Updated test cases after processing
├── test-results/ # Directory to store test execution results
├── tests/
│ ├── capture-expected.spec.js
│ └── swifftranslator.spec.js
├── IT23201996.xlsx # Excel file containing all test cases
├── package.json # Node.js project configuration
├── package-lock.json # Lock file for npm dependencies
├── playwright.config.js # Playwright configuration file
└── README.md # Project documentation


---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above recommended)  
- npm (comes with Node.js)  
- [Playwright](https://playwright.dev/)  

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd IT23201996_ASSIGNMENT_1
Install dependencies:

npm install
Install Playwright browsers:

npx playwright install
Usage
Convert Excel to JSON
Run the script to convert the Excel test cases into JSON:

node scripts/excel-to-json.js
Output will be saved in:

test-data/cases.updated.json
Run Tests
Run all Playwright tests:

npx playwright test
Run a specific test file:

npx playwright test tests/<test-file-name>.spec.js
View Test Reports
After test execution, generate and view an HTML report:

npx playwright show-report
Reports are stored in:

playwright-report/
Test Data
IT23201996.xlsx – Original Excel file with all test cases

test-data/cases.json – Converted JSON data from Excel

test-data/cases.updated.json – Updated JSON data used for test execution

Project Objectives
Automate web-based test cases using Playwright

Convert Excel test data into JSON format for automation

Generate HTML reports to track test execution results

Author
Dilshani K B C - IT23201996

