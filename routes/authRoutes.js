import express from 'express';
import {registerController} from '../controllers/authController.js';

const router = express.Router();


//register route | method POST
router.post("/register", registerController);


export default router;