var todo = require('./models/Todo');

module.exports = function(app) {
    app.get('/api/todo', function(req, res){
        todo.find(function(err, todos){
            if(err)
                res.send(err);
            res.json();
        });
    });

    app.get('*', function(req, res){
        res.sendfile('./public/index.html');
    });
};