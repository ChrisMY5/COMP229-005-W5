let mongoose = require('mongoose');

//create a model class
let bookModel = mongoose.Schema(
    {
        //set the properties
        name: String,
        author: String,
        published: String,
        description: String,
        price: Number
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);
