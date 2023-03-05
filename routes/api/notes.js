// routes/api/notes.js

const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const notesCtrl = require('../../controllers/api/notes');

// All paths start with '/api/notes'

// GET /api/notes - get all notes for the logged-in user
router.get('/', ensureLoggedIn, notesCtrl.getAll);
router.post('/', ensureLoggedIn, notesCtrl.create);

module.exports = router;
