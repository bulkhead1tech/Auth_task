import express from 'express';
import {isAuthenticated} from '../middlewares/auth.js'
import { registerUser } from '../controllers/user.controller.js';
import { loginUser } from '../controllers/user.controller.js';
import {fetchUsers} from '../controllers/user.controller.js';
import {fetchUser} from '../controllers/user.controller.js';
import {logoutUser} from '../controllers/user.controller.js';
import { isAdmin } from '../middlewares/auth.js';



const router = express.Router();

router.route('/register').post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/me").get(isAuthenticated, fetchUser);
router.route("/getAllUsers").get(isAdmin, fetchUsers);



export default router;