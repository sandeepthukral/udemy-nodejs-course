console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note with title', title, ' and body', body);
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