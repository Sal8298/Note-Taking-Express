const fs = require('fs');
const path = require('path');

module.exports = function createNote(body, allNotes) {
  const notes = body;
  allNotes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/allNotes.json'),
    JSON.stringify({ allNotes }, null, 2)
  );
  return notes;
}

module.exports =  function deleteNote(id, notes) {
  let allNotes = notes.filter(el => {
    if (el.id == id) {
      return false
    } 
    
    else {
      return true
    }
  })

  let index = 0;
  allNotes.forEach(notes => {
    notes.id = index;
    index += 1;
  });

  fs.writeFileSync(
    path.join(__dirname, '../db/allNotes.json'),
    JSON.stringify({ allNotes }, null, 2)
  );
  return allNotes;
}
