var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];
fs.readdir(path,function(err, files){
  for (var i = 0; i < files.length; i++) {
    if (files[i].split('.')[1] == ext) console.log(files[i]);
  };
});

/*
Here's the official solution is if you want to compare notes:

────────────────────────────────────────────────────────────────────────────────

    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

────────────────────────────────────────────────────────────────────────────────
*/
