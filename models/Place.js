const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    title: { type: String, unique: true},
    description: String,
    rating: Number,
    location: {
        latitude: Number,
        longitude: Number
    },
    address: String,
    website: String,
    tags: Array,
    submitedBy: mongoose.Schema.Types.ObjectId
},{ timestamps: true })

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;