const { test, expect } = require("@playwright/test");
const cases = require("../test-data/cases.updated.json");

const normalize = (s = "") =>
  s.replace(/\r\n/g, "\n")
   .replace(/[ \t]+/g, " ")
   .replace(/\n+/g, "\n")
   .trim();

test.describe("SwiftTranslator Singlish → Sinhala", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/", {
      waitUntil: "domcontentloaded"
    });
  });

  for (const tc of cases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {

      const inputBox = page.getByRole("textbox", {
        name: "Input Your Singlish Text Here."
      });

      await expect(inputBox).toBeVisible();

      await inputBox.fill("");
      await inputBox.fill(tc.input);

      await page.waitForTimeout(1500);

      const container = inputBox.locator("xpath=ancestor::div[2]");
      const outputEl = container
        .locator(':text-matches(".*[\\u0D80-\\u0DFF].*", "s")')
        .filter({ hasNot: page.getByText("English") })
        .first();

      await expect(outputEl).toBeVisible();

      const actual = normalize(await outputEl.innerText());

     if (tc.type === "positive") {
  expect(actual).toBe(normalize(tc.expected));
} else {
  test.fail(true, "Negative test case – intentional failure");
}


    });
  }
});
