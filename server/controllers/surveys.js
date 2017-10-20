var mongoose = require('mongoose');
var Survey = mongoose.model('surveys');
var path = require('path');
var Author = mongoose.model('authors');

module.exports = {
    showOne: (req,res,next) => {
        Survey.findOne({_id: req.params.id}, function(err, result){
            if(err) { 
                res.json(err);
            } else {
                res.json(result);
            }
        });
    },

    create: (req,res,next) => {
        Author.findOne({_id: req.params.id}, function(err, author){
            if(err) { 
                res.json(err);
            } else {
                var survey = new Survey(req.body);
                survey._author = author._id;
                author.surveys.push(survey);
                survey.save( function(err){
                    if(err) { 
                        res.json(err);
                    } else {
                        author.save( function(err){
                            if(err) { 
                                res.json(err);
                            } else {
                                res.json(survey);
                            }
                        });
                    }
                });
            }
        });

    },

    remove: (req,res,next) => {
        Survey.remove({_id: req.params.id}, function(err){
            if(err) { 
                res.json(err); 
            } else {
                res.json({message:"Delete Success"});
            }
        });
    },

    update: (req, res) => {
        Survey.findOne({_id: req.params.id}, (err, survey) => {
            if(survey){
                survey.votes = req.body.votes;
                survey.save((err) => {
                    if(err){
                        res.json(err)
                    }
                    else{
                        res.json({message: 'Survey updated!'})
                    }
                })
            }
            else{
                res.json(err)
            }
        });
    }
}