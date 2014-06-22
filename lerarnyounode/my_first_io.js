var fs = require('fs');
content = fs.readFileSync(process.argv[2]).toString();
console.log(content.split("\n").length - 1);
