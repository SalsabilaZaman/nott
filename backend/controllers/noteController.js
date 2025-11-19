const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

// @desc Get All notes
// @route GET /api/notes
// @access Private
const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user_id: req.user.id });
  if (notes.length === 0) {
    return res.status(404).json({ message: "No notes found" });
  }
  res.status(200).json(notes);
});

// @desc Create a new note
// @route POST /api/notes
// @access Private
const createNote = asyncHandler(async (req, res) => {
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
// @access Private
const updateNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404);
    throw new Error("Note not found");
  }

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedNote);
  // res.status(200).json({ message: `Note with ID: ${noteId} updated successfully` });
});

// @desc Delete a note by ID
// @route DELETE /api/notes/:id
// @access Private
const deleteNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404);
    throw new Error("Note not found");
  }

  await Note.findByIdAndDelete(req.params.id);
  res.status(200).json(note);
});

// @desc Get a single note by ID
// @route GET /api/notes/:id
// @access Private
const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    // return res.status(404).json({ message: "Note not found" });

    res.status(404);
    throw new Error("Note not found");
  }

  res.status(200).json(note);
});

module.exports = {
  getAllNotes,
  createNote,
  getNoteById,
  updateNoteById,
  deleteNoteById,
};
