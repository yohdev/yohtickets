import express from 'express';
import usersController from '../../controllers/usersController.js';
const router = express.Router();

// User routes

  router.get('/', (req, res) => {
      res.send(`Api server in running (${new Date()})`);  });

  router.route('/users')
      .get(usersController.getAll)
      .post(usersController.register);

export {router as userRouter};