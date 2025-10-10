setTimeout(function(){
    console.log("Aakarsh")
},2000)
// setInterval(() => {
//     console.log("Aakarsh")
    


const saytext = function(){
    console.log("Aakarsh")
}
const changetext = function(){
    document.querySelector('h2').innerHTML="best javascript course batch"
}
 const chnage =setTimeout(changetext,2000)
 document.querySelector('#stop').addEventListener('click' , function(){
    clearTimeout(chnage)
    console.log("Stopped")
 })