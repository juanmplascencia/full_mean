var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    name: { type: String },
    _author: { type: Schema.Types.ObjectId, ref: 'authors' }
    
    }, {timestamps: true});

var Book = mongoose.model('books', BookSchema);
module.exports = Book;