import { asyncHandler } from "../utils/asyncHandler.utils.js";
import {Notes} from "../models/note.model.js"

export const createNote = asyncHandler(async (req, res, next) => {
       const {note} = req.body;
       if (!note) return next(new Error("Field missing."));
       await Notes.create({
        note
       })
       await res.status(201).json({
        success: true,
        message: "note created successfully"
       })
})


export const updateNote = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const { update_note } = req.body;

  if (!id || !update_note) {
    return next(new Error("Field missing."));
  }

  const updatedNote = await Notes.findOneAndUpdate(
    { _id: id },               
    { note: update_note },       
  );

  if (!updatedNote) {
    return next(new Error("Note not found"));
  }

  res.status(200).json({
    success: true,
    message: "Note updated successfully",
    note: updatedNote
  });
});
export const readNote = asyncHandler(async (req, res, next) => {
  const notes = await Notes.find();  
  res.status(200).json({
    success: true,
    count: notes.length,
    notes
  });
});
export const deleteNote = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  if (!id) return next(new Error("Field missing."));

  const deletedNote = await Notes.findByIdAndDelete(id);

  if (!deletedNote) return next(new Error("Note not found"));

  res.status(200).json({
    success: true,
    message: "Note deleted successfully"
  });
});