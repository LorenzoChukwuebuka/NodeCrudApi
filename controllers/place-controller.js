 const Place = require('../models/places-model');
 
// @get places by id
const getPlacebyId = async (req,res,next)=>{
    const placeId = req.params.pid;

    const place = await Place.findById(placeId);

    if(!place){
    const error = new Error('Could not find a place for the provided id');
      error.code = 404;
     return next(error);
    }

res.json({place:place.toObject({getters:true}) });
};


//@get place by Userid
// @ just gets a place
const getPlacebyUserId = (req,res,next)=>{
    const userId = req.params.uid;

    const place = Dummy_places.find(p=>{
      return p.creator === userId;
    }); 

    
  
        if(!place){
            const error = new Error('Could not find a place for the provided id');
              error.code = 404;
            return  next(error);
            }
       
     
      res.json({place});
    

};  

//@get places by userid

const getPlacesbyUserId = async (req,res,next) => {
	const userId = req.params.uid;

	const places =  await Place.find({ creator:userId});

	res.json({ places: places.map(place => place.toObject({getters:true})) });
}
 

//@create a new place

const CreatePlace = (req,res,next)=>{
     const{ title, description,coordinates, address,creator} = req.body;
     
     const createdPlace = new Place({
       title,
       description,
       address,
       location:coordinates,
       images,
       creator

 
     });
      
      createdPlace.save();

     res.status(201).json({place:createdPlace}); 

};

// @ update a new place

const updatePlacebyId = async(req,res,next)=>{
    const { title, description } = req.body;
    const placeid = req.params.pid;

	place = await Place.findById(placeid);

	place.save();
      
   place.title = title;
   place.description = description;
 
   res.status(200).json({place:updatePlacebyId.toObject({getters:true})});


};

// @delete a place

const deletePlacebyId = (req,res,next)=>{
     const placeid = req.params.pid;
     
	  let place = Place.findById(placeid);

	   if(place){
		   place.remove();
	   }


    res.status(200).json({message:'Deleted place'})

};


exports.getPlacebyId = getPlacebyId;
exports.getPlacesbyUserId = getPlacesbyUserId;
exports.getPlacebyUserId = getPlacebyUserId;
exports.CreatePlace = CreatePlace;
exports.updatePlacebyId =updatePlacebyId;
exports.deletePlacebyId = deletePlacebyId;


