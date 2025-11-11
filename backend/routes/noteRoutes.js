const express = require('express');
const router = express.Router();


notes=[]

router.route('/api/notes').get( (req, res) => {
  // res.send('Fetching all notes');
  // res.json({ notes: ['Note 1', 'Note 2', 'Note 3'] });
  // res.status(200).json({ notes: ['Note 1', 'Note 2', 'Note 3'],notes }); 
  res.status(200).json({ 'notes':notes });

});

router.route('/api/notes').post( (req, res) => {
  // res.send('Creating a new note');
  const noteText = req.body.text || 'Sample note text';
  const note={
    id:notes.length + 1,
    text:noteText,
    createdAt:new Date().toISOString()
  }
  notes.push(note);
  res.status(201).json({ message: 'Note created successfully',notes });
});

router.route('/api/notes/:id').get( (req, res) => {
  const noteId = req.params.id;
  // res.send(`Fetching note with ID: ${noteId}`);
  res.status(200).json({ message: `Note with ID: ${noteId} fetched successfully`, note: notes.find(n => n.id == noteId) });
  res.status(200).json({ note: `Note with ID: ${noteId}` });
});

router.route('/api/notes/:id').put( (req, res) => {
  const noteId = req.params.id;
  // res.send(`Updating note with ID: ${noteId}`);
  res.status(200).json({ message: `Note with ID: ${noteId} updated successfully` });
});

router.route('/api/notes/:id').delete( (req, res) => {
  const noteId = req.params.id;
  // res.send(`Deleting note with ID: ${noteId}`);
  res.status(200).json({ message: `Note with ID: ${noteId} deleted successfully` });
});


module.exports = router;