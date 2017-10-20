var author = require('../controllers/authors.js');
var survey = require('../controllers/surveys.js');
const path = require('path');

module.exports = function(app) {
    app.get('/authors',author.showAll);
    app.get('/authors/:name',author.showOne);
    app.get('/surveys/:id',survey.showOne);
    app.post('/authors',author.create);
    app.post('/survey/:id',survey.create);
    app.delete('/surveys/:id', survey.remove);
    app.put('/surveys/:id', survey.update);
    app.all("*", (req,res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}