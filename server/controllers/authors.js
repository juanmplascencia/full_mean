var mongoose = require('mongoose');
var Author = mongoose.model('authors');
var Survey = mongoose.model('surveys');
var path = require('path');

module.exports = {
    showAll: (req,res,next) => {
        Survey.find({})
        .populate('_author')
        .exec( function(err, results){
            if(err) { 
                res.json(err);
            } else {
                res.json(results);
            }
        });
    },
    showOne: (req,res,next) => {
        Author.findOne({name: req.params.name}, function(err, result){
            if(err) { 
                res.json(err);
            } else {
                res.json(result);
            }
        });
    },
    create: (req,res,next) => {
        var author = new Author(req.body);
        author.save( function(err,result){
            if(err) { 
                res.json(err);
            } else {
                res.json(result);
            }
        });
    }
}