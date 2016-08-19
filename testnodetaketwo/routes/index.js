var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET USerlist Page */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('userlist', {
        "userlist" : docs 
    });
  });
});

router.get('/profile', function(req, res){
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
    res.render('profile', {
        "profile" : docs,
         title : 'profile'['profile'.length-1].username
    });
  });
});

router.get('/newuser', function(req, res, next) {
  res.render('newuser', { title: 'Add New User' });
});

router.get('/newuserbyizzy', function(req, res, next) {
  //res.render('newuserbyizzy', { title: 'Add New User' });
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('newuserbyizzy', {
        "newuserbyizzy" : docs 
    });
  });
});

/* POST to Add User Service */
router.post('/newuserbyizzy', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    //var profile = userName;
    var currentUser = req.body.username;
    var userEmail = req.body.useremail;
    var userPassword = req.body.password;
    var userBio = req.body.userbio;
    
    var anx = req.body.anx;
    var str = req.body.str;
    var rel = req.body.rel;
    var bul = req.body.bul;
    var dep = req.body.dep;
    var low = req.body.low;
    var sui = req.body.sui;
  //var oth = req.body.oth;

    // Set our collection
    var collection = db.get('usercollection');
    
    
       // if (userName == collection[users].username)
    if(collection.find({username:{$exists: true, $ne: userName}})){
        // Submit to the DB
        res.send("ERROR! This username has already been taken. Please go back and try again!");
        
        }
    else{
        collection.insert({
                "username" : userName,
                "email" : userEmail,
                "password" : userPassword,
                "bio": userBio,
                "anx" : anx,
                "str" : str,
                "rel" : rel,
                "bul" : bul,
                "dep" : dep,
                "low" : low,
                "sui" : sui,
                
            }, function (err, doc) {
                if (err) {
                    // If it failed, return error
                    res.send("There was a problem adding the information to the database.");
                }
                else {
                    // And forward to success page
                    res.redirect("profile");
                }
        });
    }
    
    
});

module.exports = router;
