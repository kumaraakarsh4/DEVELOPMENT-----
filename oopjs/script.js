// const user ={
//     username : "Aakarsh",
//     logincount : 8,
//     signedIn : true,
//     getUserDetails: function(){
//         console.log(`username:${this.username}`);
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());

// function user(username,logincount,signedIn){
    //this.username --> variable ; username is we passing the value
     
//     this.username = username;
//     this.logincount = logincount;
//     this.signedIn = signedIn;
//     this.greeting = function(){
//         console.log(`welcome ${this.username}`);
        
//     }
//     return this
// }
// const userone = new user("Aakarsh", 8 , true);
// const usertwo = new user("Dimpu" , 11 , false);
// console.log(userone.constructor);
// console.log(usertwo);

function multiple(num){
    return num*5;
}
multiple.power = 2;
console.log(multiple(5));
console.log(multiple.power);
console.log(multiple.prototype);






