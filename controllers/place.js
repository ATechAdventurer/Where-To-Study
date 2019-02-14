const { promisify } = require('util');
const Place = require('../models/Place');
const User = require('../models/User');
const toTitleCase = require('../utils/toTitleCase');

const randomBytesAsync = promisify(crypto.randomBytes);

/**
 * GET /places
 * Places page.
 */
exports.getPlaces = (req, res) => {
    res.render('places/index', {
        title: 'Places'
    });
};

/** 
 * GET /places/new
 * Add Place page
 */

 exports.newPlaces = (req, res) => {
     res.render('places/create', {
         title: "New Place"
     })
 }

/**
 * POST /places/create
 * Create a new local account.
 */
exports.addnewPlaces = (req, res, next, api = false) => {
    //TODO: Add validation
    User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) { return next(err); }
        if (!foundUser) { return next("Please login") }
        if (foundUser) {
            let { title, description, rating, location, address, website, tags } = req.body;
            const place = new Place({
                title,
                description,
                rating,
                location,
                address,
                website,
                tags,
                submitedBy: foundUser._id
            });
            Place.save((err) => {
                if(api == true){
                    res.status(201).send({msg: "success"});
                }else{
                    if (err) { return next(err); }
                    res.redirect('/places');
                }
                
            })
        }
    };
}