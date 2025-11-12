const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const cors=require('cors');




const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use("/",require('./routes/noteRoutes'));
app.use(require('./middleware/errorHandler'));

// In-memory storage
let notes = [];
let idCounter = 1;

// GET all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// POST a new note
app.post("/notes", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }
  const newNote = { id: String(idCounter++), text };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// DELETE a note by ID
app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = notes.length;
  notes = notes.filter(note => note.id !== id);
  
  if (notes.length === initialLength) {
    return res.status(404).json({ error: "Note not found" });
  }
  res.json({ message: "Note deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});