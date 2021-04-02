const express = require('express');
const router = express.Router();

// User Model
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
    await console.error(err);
    } 
  })

router.post('/', async (req,res)=>{
  const username = req.body.username;

  const newUser = new User({username});
    try{ 
      await newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    catch (err) {
    await console.error(err);
    } 
})



module.exports = router;