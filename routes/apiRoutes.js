const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const deleteNote = require('../public/assets/js/noteUtility');
let { allNotes }  = require('../db/allNotes');
 
router.get('/notes', (req, res) => {
    let results = allNotes;
    res.json(results);
  });
  
  router.post('/notes', (req, res) => {
    if(allNotes) {
    req.body.id = allNotes.length.toString();
    // console.log(req.body)
    } else 
    { req.body.id = 0 }
    createNote(req.body, allNotes)
    res.json(allNotes);
  });
  
  router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    allNotes = await deleteNote(id, allNotes);
    res.json(allNotes);
  });
  

  function createNote(body, allNotes) {
    const note = body;
    console.log('body')
    allNotes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '.././db/allNotes.json'),
      JSON.stringify({ allNotes },null, 2)
    );
    return note;
  }

  module.exports = router;
  