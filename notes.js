const fs = require('fs');
console.log('Starting notes.js');

const FILE = 'notes-data.json';
var fetchNotes = () => {
  
  try {
    var notesString = fs.readFileSync(FILE);
    return JSON.parse(notesString);
  } catch (e){
    return [];
  }
};

var saveNote = (notes) => {
  fs.writeFileSync(FILE, JSON.stringify(notes));
};

var addNote = (title, body) => {
  console.log('Processing note with title', title, ' and body', body);
  
  var notes = fetchNotes();
  var duplicateTitles = notes.filter( (note) => note.title === title )
  var note = {
    title,
    body
  }

  if (duplicateTitles.length == 0){
    notes.push(note);
    saveNote(notes);
    return note;
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