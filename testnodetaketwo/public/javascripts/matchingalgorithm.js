var userCollection = [];
$(document).ready(function(){
    
$.getJSON('/users/newuserbyizzy', function(data){
    var userCollection = data;
    console.dir(userCollection);
    var currentUser = userCollection[userCollection.length-1];
    var users = userCollection;
    //var depression;
    var matchList = [];
    for (var i = 0; i < userCollection.length-1; i++) {
        if (users[i].dep == currentuser.dep){
            //add user to matchList[]
            matchList.push(users[i]);
            console.log(matchList);
        }
        /*
        if (users[i].anx == currentuser.anx){
            matchList.push(user[i]);
        }
        if (users[i].low == currentuser.low){
            matchList.push(user[i]);
        }
        if (users[i].sui == currentuser.sui){
            matchList.push(user[i]);
        }
        if (users[i].rel == currentuser.rel){
            matchList.push(user[i]);
        }*/
}
    console.log(userCollection);
})
/*



for (var users = 0; users < sameZipList.length; users += 1) {
    if (attributes == currentUser.attributes){
        //add user to matchList
        matchList.push(user);
    }
    show matchList []
    
}

if (currentUser anx = "on"){
    for (var anxusers = 0; anxusers < sameZipList.length; anxusers += 1) {
        if (sameZipList[anxusers].anx == "on"){
            add user to matchList //append sameZipList[anxusers] to matchList
        }
    }
}

if (currentUser str = "on"){
    for (var strusers = 0; strusers < sameZipList.length; strusers += 1) {
        if (sameZipList[strusers].str == "on"){
            add user to matchList //append sameZipList[strusers] to matchList
        }
    }
}

if (currentUser rel = "on"){
    for (var relusers = 0; relusers < sameZipList.length; relusers += 1) {
        if (sameZipList[relusers].rel == "on"){
            add user to matchList //append sameZipList[relusers] to matchList
        }
    }
}

if (currentUser bul = "on"){
    for (var bulusers = 0; bulusers < sameZipList.length; bulusers += 1) {
        if (sameZipList[bulusers].bul == "on"){
            add user to matchList //append sameZipList[bulusers] to matchList
        }
    }
}

if (currentUser dep = "on"){
    for (var depusers = 0; depusers < sameZipList.length; depusers += 1) {
        if (sameZipList[depusers].dep == "on"){
            add user to matchList //append sameZipList[depusers] to matchList
        }
    }
}

if (currentUser low = "on"){
    for (var lowusers = 0; lowusers < sameZipList.length; lowusers += 1) {
        if (sameZipList[lowusers].low == "on"){
            add user to matchList //append sameZipList[lowusers] to matchList
        }
    }
}

if (currentUser sui = "on"){
    for (var suiusers = 0; suiusers < sameZipList.length; suiusers += 1) {
        if (sameZipList[suiusers].sui == "on"){
            add user to matchList //append sameZipList[suiusers] to matchList
        }
    }
} */
});