import express from 'express';
import userController from './userController.js';
import { verifyToken, IsAdmin, IsUser } from '../middleware/auth.js';
const router = express.Router();

// User routes
router.route('/register').post(userController.register);
router.route('/login').post(userController.login);
router.route('/:id').get(userController.getuser);
router.route('/delete/:id').delete(userController.delete);

// Auth user only
router.get('/events', verifyToken, IsUser, userController.userEvent);

// Auth Admin only
router.get('/special', verifyToken, IsAdmin, userController.adminEvent);

export {router as userRoutes};