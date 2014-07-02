var net = require('net')
var server = net.createServer(function (socket) {
})
server.listen(process.argv[2]);
var client = net.connect({port: process.argv[2]},
    function() { //'connect' listener
  console.log(getTime());
});

function getTime(){
  var date = new Date();
  var time = date.getFullYear();
  month = (date.getMonth() + 1).toString();
  if (month.length < 2) month = '0'+month;

  dom = (date.getDate()).toString();
  if (dom.length < 2) dom = '0'+dom;

  hours = (date.getHours()).toString();
  if (hours.length < 2) hours = '0'+hours;

  mins = (date.getMinutes()).toString();
  if (mins.length < 2) mins = '0'+mins;

  time  += '-' + month + '-' + dom + ' ' +  hours + ':' +  mins;
  console.log(time);
}
