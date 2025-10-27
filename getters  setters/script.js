// class user{
//     constructor(email , password){
//         this.email = email;
//         this.password = password
//     }
//     get email(){
//         return this.emails
//     }
//     set email(value){
//         this.emails = value.toUpperCase()
//     }
//     get password(){
//         return `${this.passwords}aakarsh`.toUpperCase()
//     }
//     set password(value){
//         this.passwords = value.toUpperCase()
//     }
// }
// const print = new user("aakarsh@jio.com" , "abc")
// console.log(print.password);
// console.log(print.email);

// function init(){
//     let name = "Morzilla";
//     function displayname(){
//         let secret = "my123"
//         console.log(name);
       

        
//     }
//     function inner(){
//         console.log(secret);
        
        
//     }
//     displayname();
//     inner();
// }
// init();

document.getElementById("orange").onclick=function(){
    document.body.style.backgroundColor = `orange`
}
document.getElementById("green").onclick=function(){
    document.body.style.backgroundColor = `green`
}