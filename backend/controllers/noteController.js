let notes = [
  { id: "1", text: "Note 1" },
  { id: "2", text: "Note 2" },
  { id: "3", text: "Note 3" }
];
let idCounter = 4;

// @desc Get All notes
// @route GET /api/notes
// @access Public
const getAllNotes = (req, res) => {
  res.status(200).json({ notes });
};

// @desc Create a new note
// @route POST /api/notes
// @access Public
const createNote = (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).json({ message: "Note text is required" });
  }

  const newNote = {
    id: idCounter.toString(),
    text: text.trim(),
  };

  notes.push(newNote);
  idCounter++;

  res.status(201).json({ message: "Note created successfully", note: newNote });
};

// @desc Delete a note by ID
// @route DELETE /api/notes/:id
// @access Public
const deleteNoteById = (req, res) => {
  const noteId = req.params.id;
  const initialLength = notes.length;
  notes = notes.filter((n) => n.id !== noteId);

  if (notes.length === initialLength) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.status(200).json({ message: `Note with ID: ${noteId} deleted successfully` });
};

// // @desc Get All notes
// // @route GET /api/notes
// // @access Public
// const getAllNotes = (req, res) => {
//   res.status(200).json({ notes: ['Note 1', 'Note 2', 'Note 3'] });
// };

// // @desc Create a new note
// // @route POST /api/notes
// // @access Public
// const createNote = async(req, res) => {
//   const noteText = req.body ;
//   if(!noteText){
//     res.status(400)
//     throw new Error('Note text is required')
//   }
//   res.status(201).json({ message: 'Note created successfully', noteText });
// };

// @desc Get a single note by ID
// @route GET /api/notes/:id
// @access Public
const getNoteById = (req, res) => {
  const noteId = req.params.id;
  res.status(200).json({ note: `Note with ID: ${noteId}` });
};

// @desc Update a note by ID
// @route PUT /api/notes/:id
// @access Public
const updateNoteById = (req, res) => {
  const noteId = req.params.id;
  res.status(200).json({ message: `Note with ID: ${noteId} updated successfully` });
};

// // @desc Delete a note by ID
// // @route DELETE /api/notes/:id
// // @access Public
// const deleteNoteById = (req, res) => {
//   const noteId = req.params.id;
//   res.status(200).json({ message: `Note with ID: ${noteId} deleted successfully` });
// };  

module.exports={getAllNotes,createNote,getNoteById,updateNoteById,deleteNoteById}