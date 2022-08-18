const chalk = require('chalk');

const log = console.log;
const meg = require('./notes.js')

console.log(meg());

log(chalk.bold.green("Success"));