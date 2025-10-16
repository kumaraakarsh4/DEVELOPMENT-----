const user ={
    username : "Aakarsh",
    logincount : 8,
    signedIn : true,
    getUserDetails: function(){
        console.log("Got the user details from database");
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());

