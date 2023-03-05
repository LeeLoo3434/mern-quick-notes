const Note = require('../../models/note');

module.exports = {
    getAll,
    create
};

async function getAll(req, res) {
try {
    const notes = await Note.find({ user: req.user._id });
    res.json(notes);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
}
}

async function create(req, res) {
try {
    const newNote = new Note({
    text: req.body.text,
    user: req.user._id
    });
    const savedNote = await newNote.save();
    res.json(savedNote);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
    }
}
