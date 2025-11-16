const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

let notes = [
  { id: "1", text: "Note 1" },
  { id: "2", text: "Note 2" },
  { id: "3", text: "Note 3" }
];
let idCounter = 4;


// @desc Get All notes
// @route GET /api/notes
// @access Public
const getAllNotes = asyncHandler(async(req, res) => {
  const notes = await Note.find({});
  res.status(200).json(notes);
  // res.status(200).json({ notes });
});

// @desc Create a new note
// @route POST /api/notes
// @access Public
const createNote = asyncHandler(async(req, res) => {
  // const { text } = req.body;

  // if (!text || text.trim() === "") {
  //   return res.status(400).json({ message: "Note text is required" });
  // }

  // const newNote = {
  //   id: idCounter.toString(),
  //   text: text.trim(),
  // };

  // notes.push(newNote);
  // idCounter++;

  const { title, content } = req.body;

  if (!title || title.trim() === "" || !content || content.trim() === "") {
    return res.status(400).json({ message: "Title and Content are required" });
  }

  const newNote = await Note.create({
    title: title.trim(),
    content: content.trim(),
  });

  res.status(201).json({ message: "Note created successfully", note: newNote });
});

// @desc Update a note by ID
// @route PUT /api/notes/:id
// @access Public
const updateNoteById = asyncHandler(async(req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404);
    throw new Error("Note not found");
  }

  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    req.body, 
    { new: true }
  );

  res.status(200).json(updatedNote);
  // res.status(200).json({ message: `Note with ID: ${noteId} updated successfully` });
});

// @desc Delete a note by ID
// @route DELETE /api/notes/:id
// @access Public
const deleteNoteById = asyncHandler(async(req, res) => {
  const noteId = req.params.id;
  const initialLength = notes.length;
  notes = notes.filter((n) => n.id !== noteId);

  if (notes.length === initialLength) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.status(200).json({ message: `Note with ID: ${noteId} deleted successfully` });
});

// @desc Get a single note by ID
// @route GET /api/notes/:id
// @access Public
const getNoteById = asyncHandler(async(req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.status(200).json(note);
});


module.exports={getAllNotes,createNote,getNoteById,updateNoteById,deleteNoteById}