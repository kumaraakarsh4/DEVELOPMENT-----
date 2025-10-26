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

function init(){
    let name = "Morzilla";
    function displayname(){
        console.log(name);

        
    }
    displayname();
}
init();