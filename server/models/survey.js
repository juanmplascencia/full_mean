var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new mongoose.Schema({
    question: { type: String },
    options: { type: [String] },
    votes: { type: [Number] },
    _author: { type: Schema.Types.ObjectId, ref: 'authors' }
}, {timestamps: true});

var Survey = mongoose.model('surveys', SurveySchema);
module.exports = Survey;