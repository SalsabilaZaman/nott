const express = require('express');
const router = express.Router();

router.route('/api/notes').get( (req, res) => {
  // res.send('Fetching all notes');
  // res.json({ notes: ['Note 1', 'Note 2', 'Note 3'] });
  res.status(200).json({ notes: ['Note 1', 'Note 2', 'Note 3'] }); 
});

module.exports = router;