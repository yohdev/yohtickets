import User from '../models/User.js';
import dotenv from 'dotenv';dotenv.config({ path: './../.env'});
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';



const usersController = {

    getAll: async (req, res, next) => {
        try{
            await User.find()
            .then(users => res.json(users))
          }
          catch (err) {
            res.status(400).json({ error });
          }
    
    },
    register: async ( req, res, next ) => {
      // Create a new user
      try {
        const hashedPassword = await bcrypt.hashSync(req.body.password, 8);
          const user = await new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
          })
         await user.save()
          const token = jwt.sign({ id: user._id }, "process.env.JWT_KEY", {
            expiresIn: 86400 // expires in 24 hours
          });
          console.log(token);
          res.status(200).send({ token: token });
      } catch (error) {
          res.status(400).send(error)
      }
  }
};

export default usersController;