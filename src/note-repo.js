const {Note} = require('../models');

exports.createNote = async (note) => {
  return Note.create(note, {raw: true});
};

exports.getNoteById = async (noteId) => {
  return Note.findByPk(noteId, {raw: true});
};

exports.deleteNoteById = async (noteId) => {
  return Note.delete({
    id: noteId,
  });
};

exports.updateNoteById = async (noteId, noteObj) => {
  return Note.update(noteObj, {
    where: {
      id: noteId,
    },
    raw: true});
};
