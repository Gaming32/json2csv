fs = require("fs");
json2csv = require("./json2csv");

if (process.argv[2]===undefined) {
    console.log("Syntax: json-to-csv.js <input-filename>");
    process.exit();
}

var argv = process.argv.slice(2);
console.log(json2csv.json2csv(JSON.parse(fs.readFileSync(argv[0]))));
