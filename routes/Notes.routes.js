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

router.route('/create').post( createNote);
router.route("/update/:id").put( updateNote);
router.route("/read").get(readNote);
router.route("/delete/:id").delete( deleteNote);



export default router;