#!/usr/bin/env node

console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const argv = require('yargs').argv;

const command = argv._[0];

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note){
    console.log(`Added note with title ${note.title} and body ${note.body}`);
  } else {
    console.log('Duplicate note foound. Skipping!');
  }
}else if(command === 'list'){
  notes.listNotes();
}else if(command === 'read'){
  notes.getNote(argv.title);
}else if(command === 'remove'){
  var wasRemoved = notes.deleteNote(argv.title);
  var message = wasRemoved ? `Note removed` : `Note not found`;
  console.log(message);
} else{
  console.log('command not recognized');
}