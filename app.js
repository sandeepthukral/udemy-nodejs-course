#!/usr/bin/env node

console.log('Starting app.js');

const notes = require('./notes.js');
const argv = require('yargs').argv;
const command = argv._[0];

if (command === 'add'){
  const note = notes.addNote(argv.title, argv.body);
  if (note){
    console.log(`Note created`);
    notes.logNote(note);
  } else {
    console.log('Duplicate note foound. Skipping!');
  }
}else if(command === 'list'){
  notes.listNotes();
}else if(command === 'read'){
  var readNote = notes.getNote(argv.title);
  if (readNote){
    console.log('Note found');
    notes.logNote(readNote);
  } else {
    console.log(`Note not found`);
  }
}else if(command === 'remove'){
  var wasRemoved = notes.deleteNote(argv.title);
  var message = wasRemoved ? `Note removed` : `Note not found`;
  console.log(message);
} else{
  console.log('command not recognized');
}