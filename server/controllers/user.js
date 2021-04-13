import User from '../models/User.js';
import dotenv from 'dotenv';dotenv.config({ path: './../.env'});
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const userController = {
    register: async ( req, res ) => {
      // Create a new user
      try {
        const salt = await bcrypt.genSalt(10);
        const hasPassword = await bcrypt.hash(req.body.password, salt);
    
        // Create an user object
        let user = new User({
          email: req.body.email,
          name: req.body.name,
          password: hasPassword,
          user_type_id: req.body.user_type_id
        })
            user.save((err, registeredUser) => {
          if (registeredUser) {
            // create payload then Generate an access token
            let payload = { id: registeredUser._id, user_type_id: req.body.user_type_id || 0 };
            const token = jwt.sign(payload, process.env.JWT_KEY);
            res.status(200).send({ token });
          } else {
            console.log(err);
          }
        })

      } catch (error) {
          res.status(400).send(error)
      }
  },
  login: async ( req, res ) => {
    // Create a new user
    try {
      await User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) {
            console.log(err)
        } else {
            if (user) {
                const validPass = await bcrypt.compare(req.body.password, user.password);
                if (!validPass) return res.status(401).send("Mobile/Email or Password is wrong");

                // Create and assign token
                let payload = { id: user._id, user_type_id: user.user_type_id };
                const token = jwt.sign(payload, process.env.JWT_KEY);

                await res.status(200).header("auth-token", token).send({ "token": token });
            }
            else {
                await res.status(401).send('Invalid mobile')
            }

        }
    })

    } catch (error) {
       await  res.status(400).send(error)
    }
},
// Access auth users only
userEvent : async (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.json(events)
},

adminEvent : async  (req, res) => {
    let specialEvents = [
        {
            "_id": "1",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.json(specialEvents)

}
};

export default userController;