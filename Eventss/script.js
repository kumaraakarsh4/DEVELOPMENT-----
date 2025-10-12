// setInterval(function(){
//     console.log("Aakarsh" , Date.now())
// },1000)
// const interval = function(){
//     console.log("Aakarsh" , Date.now())
// }
// setInterval(interval,1000)
const hell = document.querySelector('#startButton')
const hello = document.querySelector('#stopButton')
// const interval = setInterval(function(){
//     console.log("Start Printing" , Date.now())
// },1000)
hell.addEventListener('click', function(){
   interval = setInterval(function(){
        console.log("start printing" , Date.now())
    },1000)
   
})
hello.addEventListener('click',function(){
  clearInterval(interval)
  console.log("Stop Printing",Date.now() )
})