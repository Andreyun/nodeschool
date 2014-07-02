var http = require('http');
var concatStream = require('concat-stream');

function get_url(arg_num){
  var url = process.argv[arg_num+1];
  if (!url == '') {
    http.get(url, function(res) {
      res.pipe(concatStream(function(data) {
        console.log(data.toString());
        get_url(arg_num + 1);
      }));
    });
  }
}

get_url(1);

/*
Here's the official solution is if you want to compare notes:

────────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(data)

          results[index] = data.toString()
          count++

          if (count == 3) // yay! we are the last one!
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)

────────────────────────────────────────────────────────────────────────────────*/
