const express = require('express');
const router = express.Router();

// Import User Model
const User = require('../../models/User');

// @route GET api/users
// @desc Get All Users
// @access auth

router.get('/', async (req,res)=>{
    try{
      await User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
    }
    catch (err) {
    console.error(err);
    } 
  })

// @route POST api/users
// @desc POST A User
// @access auth

router.post('/', async (req,res)=>{
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.json({ error: null, data: savedUser });
  } catch (error) {
    res.status(400).json({ error });
  }
})



module.exports = router;