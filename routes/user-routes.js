
const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/user-controller');


router.get('/',UserControllers.getUser);
 
router.post('/signUp', UserControllers.signUser );
 
router.post('/Login', UserControllers.logUser );

module.exports = router; 
