const xlsx = require("xlsx");
const fs = require("fs");

const workbook = xlsx.readFile("IT23347762.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];

const rows = xlsx.utils.sheet_to_json(sheet, { defval: "" });

const cases = rows
  .filter(r => r["TC ID"])
  .map(r => ({
    id: r["TC ID"],
    name: r["Test case name"],
    type: r["TC ID"].startsWith("Pos") ? "positive" : "other",
    input: r["Input"],
    expected: r["Expected output"] || ""
  }));

fs.writeFileSync(
  "test-data/cases.json",
  JSON.stringify(cases, null, 2),
  "utf-8"
);

console.log("✅ cases.json generated successfully");
