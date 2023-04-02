const fs = require('fs');
const path = require('path');

module.exports = function deleteNote(id, notes) {
  let allNotes = notes.filter(el => {
    if (el.id == id) {
      return false
    } 
    
    else {
      return true
    }
  })

  let index = 0;
  allNotes.forEach(note => {
    note.id = index;
    index += 1;
  });

  fs.writeFileSync(
    path.join(__dirname, '../../../db/allNotes.json'),
    JSON.stringify({ allNotes }, null, 2)
  );
  return allNotes;
}