module.exports = function (dir_path, ext, callback) {
  var fs = require('fs');
  var path = require('path');
  fs.readdir(dir_path,function(err, files){
    if (err) {
      return callback(err);
    }
    var files_arr = new Array();
    for (var i = 0; i < files.length; i++) {
      if (path.extname(files[i]) == '.' + ext) files_arr.push(files[i]);
    };
    return callback(null, files_arr);
  });
}
