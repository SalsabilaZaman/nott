// @desc Get All notes
// @route GET /api/notes
// @access Public
exports.getAllNotes = (req, res) => {
  res.status(200).json({ notes: ['Note 1', 'Note 2', 'Note 3'] });
};

// @desc Create a new note
// @route POST /api/notes
// @access Public
exports.createNote = (req, res) => {
  const noteText = req.body.text || 'Sample note text';
  res.status(201).json({ message: 'Note created successfully', note: noteText });
};

// @desc Get a single note by ID
// @route GET /api/notes/:id
// @access Public
exports.getNoteById = (req, res) => {
  const noteId = req.params.id;
  res.status(200).json({ note: `Note with ID: ${noteId}` });
};

// @desc Update a note by ID
// @route PUT /api/notes/:id
// @access Public
exports.updateNoteById = (req, res) => {
  const noteId = req.params.id;
  res.status(200).json({ message: `Note with ID: ${noteId} updated successfully` });
};

// @desc Delete a note by ID
// @route DELETE /api/notes/:id
// @access Public
exports.deleteNoteById = (req, res) => {
  const noteId = req.params.id;
  res.status(200).json({ message: `Note with ID: ${noteId} deleted successfully` });
};  