const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: String,
    description: String,
    rating: Number,
    user: mongoose.Schema.Types.ObjectId
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;