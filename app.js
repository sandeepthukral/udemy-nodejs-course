#!/usr/bin/env node

console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const argv = require('yargs').argv;

const command = argv._[0];

if (command === 'add'){
  notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
  notes.listNotes();
}else if(command === 'read'){
  notes.getNote(argv.title);
}else if(command === 'remove'){
  notes.deleteNote(argv.title);
} else{
  console.log('command not recognized');
}