# IT3040 – Playwright Automation Assignment

This project is developed as part of **IT3040 – Playwright Automation** module.  
It demonstrates automation of test cases using **Playwright** with test data managed in **Excel** files.

---

## Project Structure


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
Convert Excel to JSON
node scripts/excel-to-json.js
Output will be saved in:
test-data/cases.updated.json
Run Tests
npx playwright test
Run a specific test file:
npx playwright test tests/<test-file-name>.spec.js
View Test Reports
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
DILSHANI K B C
IT23201996
