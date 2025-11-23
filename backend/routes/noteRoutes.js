const express = require("express");
const router = express.Router();

const noteController = require("../controllers/noteController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
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
