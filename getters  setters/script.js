class user{
    constructor(email , password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this.passwords
    }
    set password(value){
        this.passwords = value.toUpperCase()
    }
}
const print = new user("aakarsh@jio.com" , "abc")
console.log(print.password);
