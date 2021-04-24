// if (typeof require !== "undefined")
XLSX = require("xlsx");
const fs = require("fs");

var testSheet = XLSX.readFile("STKMASTER.xlsx");
/* DO SOMETHING WITH workbook HERE */
const test = XLSX.utils.sheet_to_json(testSheet.Sheets["STKMASTER"]);
// console.log(test);

fs.writeFile("./mockdata.json", JSON.stringify(test), (err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("done");
  }
});
