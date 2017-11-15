const fs = require('fs');
console.log('Starting notes.js');

const FILE = 'notes-data.json';

var addNote = (title, body) => {
  console.log('Processing note with title', title, ' and body', body);

  var notes = [];

  try {
    var notesString = fs.readFileSync(FILE);
    var notes = JSON.parse(notesString);
  } catch (e){

  }

  var duplicateTitles = notes.filter( (note) => note.title === title )

  var note = {
    title,
    body
  }

  if (duplicateTitles.length == 0){
    notes.push(note);
    fs.writeFileSync(FILE, JSON.stringify(notes));
    console.log('Note stored!');
  } else {
    console.log("Duplicate entry found. Skipping!");
  }
  
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