var fs = require('fs');
fs.readFile(process.argv[2], function (err, data) {
  if (err) throw err;
  content = data.toString();
  console.log(content.split("\n").length - 1);
});
