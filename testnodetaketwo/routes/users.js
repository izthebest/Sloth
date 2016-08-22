
var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
/*router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
}); */

router.get('/newuserbyizzy', function(req, res) {
    var db = req.db;
    var collection = db.get('newuserbyizzy');
    //console.log(collection);
    collection.find({},{}, function(e,docs){
        console.log(docs);
        res.json(docs);
    });
   
});

/*router.get('/profile', function(req, res) {
    var db = req.db;
    var collection = db.get('profile');
    collection.find({'username': 'iamdepressed'},{},function(e,docs){
        res.json(docs);
    });
});*/


module.exports = router;