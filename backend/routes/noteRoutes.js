const express = require('express');
const router = express.Router();

const routeController = require('../controllers/noteController')

router.route('/api/notes').get(routeController.getAllNotes);

router.route('/api/notes').post(routeController.createNote);

router.route('/api/notes/:id').get(routeController.getNoteById);

router.route('/api/notes/:id').put(routeController.updateNoteById);

router.route('/api/notes/:id').delete(routeController.deleteNoteById);


module.exports = router;