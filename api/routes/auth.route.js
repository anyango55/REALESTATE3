import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router  = express.Router();

router.post('/signup');
router.post('/login');

export default router;