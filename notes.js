const fs = require('fs');
console.log('Starting notes.js');

const FILE = 'notes-data.json';

var addNote = (title, body) => {
  console.log('Adding note with title', title, ' and body', body);

  var notes = [];

  try {
    var notesString = fs.readFileSync(FILE);
    var notes = JSON.parse(notesString);
  } catch (e){
  }

  var note = {
    title,
    body
  }
  notes.push(note);
  fs.writeFileSync(FILE, JSON.stringify(notes));
}

var listNotes = () => {
  console.log('Listing notes');
}

var getNote = (title) => {
  console.log('Reading note', title);
}

var deleteNote = (title) => {
  console.log('Deleting note', title);
}

module.exports = {
  addNote,
  listNotes,
  getNote,
  deleteNote
}