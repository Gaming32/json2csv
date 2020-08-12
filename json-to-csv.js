fs = require("fs");
json2csv = require("./json2csv")

var argv = process.argv.slice(2);
console.log(json2csv.json2csv(JSON.parse(fs.readFileSync(argv[0]))));