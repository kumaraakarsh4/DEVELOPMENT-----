const user ={
    username : "Aakarsh",
    logincount : 8,
    signedIn : true,
    getUserDetails: function(){
        console.log(`username:${this.username}`);
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());

