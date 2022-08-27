const chalk = require('chalk');
const { describe } = require('yargs');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
        describe: "Note body",
        demandOption: true,
        type: 'string'
    }
  },
  handler: function (argv) {
    console.log('title: ' + argv.title );
    console.log('body: ' + argv.body );
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
    console.log('Listing out all notes')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a notes',
  handler: function () {
    console.log('reading a notes')
  }
})

// add, remove, read, list

console.log(yargs.argv);