var express = require('express');
var router = express.Router();
var path = require('path');
var routingPath = __dirname + '/views/';
var app = express();

app.use(express.static(path.join(__dirname + '/public')));

/* GET home page.  */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(routingPath + 'index.html');
}); 

router.get('/learn', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(routingPath + 'learnpage.html');
}); 

router.get('/connect', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(routingPath + 'realmap.html');
}); 
router.get('/gethelp', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(routingPath + 'gethelp.html');
}); 
router.get('/social', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(routingPath + 'social.html');
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
    var currentUser = docs[docs.length-1];
    var users = docs;
    //var depression;
    var matchList = [];
    var friendList = [];
    for (var i = 0; i < docs.length-1; i++) {
        if (docs[i].dep == currentUser.dep || 
            docs[i].anx == currentUser.anx || 
            docs[i].low == currentUser.low || 
            docs[i].sui == currentUser.sui || 
            docs[i].rel == currentUser.rel ||
            docs[i].bul == currentUser.bul ||
            docs[i].str == currentUser.str){
            //add user to matchList[]
            matchList.push(docs[i].username);
            console.log(matchList); 
            collection.update(
            {_id: currentUser._id},
            {
                $set: {
                    matches: matchList
                }
            })
            console.log("I have your matches!");
            console.log(currentUser.matches);
        }
        };
    
    function addFriend0(){
        friendList.push(currentUser.matches[0]);
        console.log(friendList);
        collection.update(
            {_id: currentUser._id},
                {
                    $set: {
                        friends: friendList
                }
            })
    }

    function addFriend1(){
        friendList.push(currentUser.matches[1]);
        collection.update(
            {_id: currentUser._id},
                {
                    $set: {
                        friends: friendList
                }
            })
    }

    function addFriend2(){
        friendList.push(currentUser.matches[2]);
        collection.update(
            {_id: currentUser._id},
                {
                    $set: {
                        friends: friendList
                }
            })
    }
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
                "friends": []
                
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
    else{
        res.send("ERROR! This username has already been taken. Please go back and try again!");
    }
    
    
});

module.exports = router;
