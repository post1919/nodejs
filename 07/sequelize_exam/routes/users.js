var express = require('express');
var User = require('../models').User;

var router = express.Router();

router.get('/', function(req, res, next){
    User.findAll()
    .then((users)=>{
      console.log('users ==========> ', users);
      res.json(users);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});

router.post('/', async (req, res, next) => {
  
  try {
    const user = await User.create({
      name : req.body.name,
      age : req.body.age,
      married : req.body.married,
    });

    console.log(user.result);
    res.status(201).json(user.result);

  } catch(err){
    console.error(err);
    next(err);
  }

});

module.exports = router;