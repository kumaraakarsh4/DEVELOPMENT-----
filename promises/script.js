const promiseone = new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log('Async Task Is Complete');
      resolve()
    },1000)
    
    
})
promiseone.then(function(){
    console.log('Promises are completed');
    
})

const promisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log({username: "Kumaraakarsh" , email: "Kumaraakarsh4@gmail.com"});
        
    },1000)
})
promisetwo.then(function(user){
    console.log(user);
    
})

const promisefour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:'Aakarsh' , password : '123'});
            
        }else{
            reject("something went wrong")
        }
        
    },1000)
})
promisefour.then((user) => {
    console.log(user);
    return user.username;
    

}).then((username) =>{
    console.log(username);
    

} ).catch(function(er){
    console.log(er);
    
})

// second implementation of promise by using async and try catch syntax

const promisefive = new Promise(function(resolve,reject){
   setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'Aakarsh' , password : '123'});
            
        }else{
            reject("something went wrong")
        }
        
    },1000) 
});
async function consumepromise(){
 try {
      const response =  await promisefive;
   console.log(response);
   
 } catch (error) {
    console.log(error);
    
    
 }
}
consumepromise()

// new aysnc syntax for API call using try catch .......

async function getuser(){
 try {
    const response = await   fetch('https://api.github.com/users/Aakarshkumar')
  
    
const data = await response.json()
console.log(data);
    
 } catch (error) {
    console.log(error,"");
    
    
 }

}
getuser()