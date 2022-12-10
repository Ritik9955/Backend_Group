const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: [true, "Full name is required"]
    },
    country: {
        type: String,
        required: [true, "Country is required"]
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    zipcode: {
        type: Number
    },
    street_address: {
        type: String
    },
    website: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    },
    linkedin: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    phone: {
        type: Number,
        required: [true, "Phone is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    business_name: {
        type: String,
    },
    business_country: {
        type: String,
    },
    business_logo: {
        type: String,
    },
    profile_url: {
        type: String,
    },
    team_size: {
        type: Number,
    },
    business_since: {
        type: Date
    },
    business_categories: [{
        type: String
    }],
    about_business: {
        type: String
    },

})

module.exports = mongoose.model('User', UserSchema);