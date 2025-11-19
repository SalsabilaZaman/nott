const express = require("express");
const router = express.Router();

const noteController = require("../controllers/noteController");
const { validate } = require("../models/noteModel");

router.use(validate);

router
  .route("/")
  .get(noteController.getAllNotes)
  .post(noteController.createNote);

router
  .route("/:id")
  .get(noteController.getNoteById)
  .put(noteController.updateNoteById)
  .delete(noteController.deleteNoteById);

module.exports = router;
