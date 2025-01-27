import express from 'express';
import {registerController, loginController} from '../controllers/authController.js';

const router = express.Router();


//register route | method POST
router.post("/register", registerController);

//Login route
router.post("/login", loginController);

export default router;