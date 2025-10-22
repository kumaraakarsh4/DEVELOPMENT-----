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

// prototype topic 

// function multiple(num){
//     return num*5;
// }
// multiple.power = 2;
// console.log(multiple(5));
// console.log(multiple.power);
// console.log(multiple.prototype);

// function createuser(username,score){
//     this.username = username;
//     this.score = score;
// }
// createuser.prototype.increment = function(){
//     score++;
// }
// createuser.prototype.print = function(){
//     console.log(`Score price is ${this.score}`);
    
// }
// const chai =  new createuser('chai' ,25)
// const tea = new createuser('Tea' , 250)
// chai.print()
// tea.print()

let name = "Aakarsh"
console.log(name.length);



