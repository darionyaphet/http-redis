var command = require('commander');
var colors = require('colors');
var redis = require("redis");
var client = redis.createClient();

command.version('0.0.1')
  .option('-h, --host', 'Http Host')
  .option('-p, --port', 'Http Port')
  .option('-H, --remote-host', 'Remote Redis Host')
  .option('-P, --remote-port', 'Remote Redis Port')
  .parse(process.argv);

var DBSIZE = function(db){
  return 0;
}
