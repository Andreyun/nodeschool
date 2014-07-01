var mymodule = require('./make-it-modular-module.js');
mymodule(process.argv[2],process.argv[3], function(err, data){
  if (err){
    console.log(err);
  } else {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    };
  }
});

/*
Here's the official solution is if you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
solution.js:


    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)

      list.forEach(function (file) {
        console.log(file)
      })
    })

────────────────────────────────────────────────────────────────────────────────
solution_filter.js:


    var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {

      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }

────────────────────────────────────────────────────────────────────────────────
*/
