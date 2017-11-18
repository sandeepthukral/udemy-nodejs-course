#!/usr/bin/env node

const notes = require('./notes.js');
const yargs = require('yargs');
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
          .command('add', 'Add a new note', {
            title: titleOptions,
            body: bodyOptions
          })
          .command('list', 'List all notes')
          .command('read', 'Read a note', {
            title: titleOptions
          })
          .command('remove', 'Remove a note', {
            title: titleOptions
          })
          .help()
          .argv;
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
  const listedNotes = notes.listNotes();
  console.log(`Printing ${listedNotes.length} note(s)`);
  listedNotes.forEach((note) => notes.logNote(note));
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