import User from './userModel.js';
import dotenv from 'dotenv';dotenv.config({ path: './../.env'});
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const userController = {
    register: async ( req, res ) => {
      try {
        const salt = await bcrypt.genSalt(10);
        const hasPassword = await bcrypt.hash(req.body.password, salt);
    
        // Create an user object
        let user = new User({
          email: req.body.email,
          name: req.body.name,
          password: hasPassword,
          role: req.body.role
        })

        const registeredUser = await user.save();

          if (registeredUser) {
            // create payload then Generate an access token
            return res.status(200).send("User Registered!");
          }

      } catch (error) {
          return await res.status(400).send(error)
      }
  },
login: async ( req, res ) => {
    // Create a new user
    try {
      const user = await User.findOne({ email: req.body.email });

            if (user) {
                const validPass = await bcrypt.compare(req.body.password, user.password);
                if (!validPass) return res.status(401).send("Mobile/Email or Password is wrong");

                // Create and assign token
                let payload = { id: user._id, role: user.role};
                const token = jwt.sign(payload, process.env.JWT_KEY);
                return await res.status(200).header("auth-token", token).send({ "token": token });
            }

    } catch (error) {
       return await  res.status(400).send(error)
    }
},
delete: async ( req, res ) => {
    // Create a new user
    const id = req.body.id;
    try {
      const deleted = await User.findByIdAndDelete( { _id: id } );
      return res.status(200).send("User Deleted!");
      
    } catch (error) {
       return await  res.status(400).send(error)
    }
},
getuser: async ( req, res ) => {
    // Create a new user
    const email = req.body.email;
    console.log(email);

    try {
    
      const finduser = await User.find({email: email});
      return res.status(200).send({user:finduser});
      
    } catch (error) {
       return await  res.status(400).send(error)
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
    await res.json(events)
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
    await res.json(specialEvents)

}
};

export default userController;