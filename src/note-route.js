const note = require('express').Router();
const noteRepo = require('./note-repo');

note.get('/:id', async (req, res, next) => {
  try {
    const note = await noteRepo.getNoteById(req.params.id);
    res.status(200).json(note);
  } catch (error) {
    return res.status(404).json({
      message: `No note found with id ${req.params.id}`,
    });
  }
});

note.post('/', async (req, res, next) => {
  try {
    const note = await noteRepo.createNote(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({
      message: 'An internal error occured',
    });
  }
});

note.put('/:id', async (req, res, next) => {
  try {
    const updatedUser = await noteRepo.updateNoteById(req.body, req.params.id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({
      message: `No note found with id ${req.params.id}`,
    });
  }
});

note.delete('/:id', async (req, res, next) => {
  try {
    await noteRepo.deleteNoteById(req.params.id);
  } catch (error) {
    res.status(404).json({
      message: `No note found with id ${req.params.id}`,
    });
  }
});

module.exports = note;
