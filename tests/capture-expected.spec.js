const { test, expect } = require("@playwright/test");
const fs = require("fs");
const cases = require("../test-data/cases.json");

test.setTimeout(120000);

const normalize = (s = "") =>
  s.replace(/\r\n/g, "\n")
   .replace(/[ \t]+/g, " ")
   .replace(/\n+/g, "\n")
   .trim();

test("CAPTURE_EXPECTED_POS_FUN", async ({ page }) => {

  await page.goto("https://www.swifttranslator.com/", {
    waitUntil: "domcontentloaded"
  });

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here."
  });

  for (const tc of cases) {
    if (tc.type !== "positive") continue;

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

    tc.expected = actual;
    tc.actual = actual;
    tc.status = "Pass";
  }

  fs.writeFileSync(
    "test-data/cases.updated.json",
    JSON.stringify(cases, null, 2),
    "utf-8"
  );
});
