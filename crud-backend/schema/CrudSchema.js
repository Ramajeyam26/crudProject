const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    place: String,
    mobileNumber: Number
}, {
    collection:"crudOperation"
});

module.exports = mongoose.model("crudOperation", schema);