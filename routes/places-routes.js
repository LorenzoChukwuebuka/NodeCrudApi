 const express = require('express');
 const router = express.Router();
 const placeControllers = require('../controllers/place-controller');


 router.get('/:pid',placeControllers.getPlacebyId);
 
 router.get('/user/:uid',placeControllers.getPlacebyUserId);

router.post('/',placeControllers.CreatePlace );

router.patch('/:pid',placeControllers.updatePlacebyId);

router.delete('/:pid' ,placeControllers.deletePlacebyId);

module.exports = router; 
