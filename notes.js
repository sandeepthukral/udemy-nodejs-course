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

var saveNotes = (notes) => {
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
    saveNotes(notes);
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
  var notes = fetchNotes();
  var filteredNotes = notes.filter( (note) => note.title !== title );
  saveNotes(filteredNotes);
  return filteredNotes.length !== notes.length;
}

module.exports = {
  addNote,
  listNotes,
  getNote,
  deleteNote
}