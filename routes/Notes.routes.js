import express from 'express';
import {isAuthenticated} from '../middlewares/auth.js'
import {
  createNote,
  updateNote,
  readNote,
  deleteNote
} from "../controllers/notes.controller.js";

import { isAdmin } from '../middlewares/auth.js';



const router = express.Router();

router.route('/create').post(isAdmin, createNote);
router.route("/update/:id").put(isAdmin, updateNote);
router.route("/read").get(isAuthenticated, readNote);
router.route("/delete/:id").delete(isAdmin, deleteNote);



export default router;