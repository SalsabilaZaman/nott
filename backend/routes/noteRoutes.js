const express = require('express');
const router = express.Router();

const routeController = require('../controllers/noteController')

router.route('/api/notes').get(routeController.getAllNotes).
                        post(routeController.createNote);

router.route('/api/notes/:id').get(routeController.getNoteById).
                            put(routeController.updateNoteById).
                            delete(routeController.deleteNoteById);


module.exports = router;