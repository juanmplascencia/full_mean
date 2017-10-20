var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new mongoose.Schema({
    name: { type: String },
    surveys: [{ type: Schema.Types.ObjectId, ref: 'surveys' }]
}, {timestamps: true});

var Author = mongoose.model('authors', AuthorSchema);
module.exports = Author;