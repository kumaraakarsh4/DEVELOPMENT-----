const randomcolor = function(){
    const hex = "0123456ABCDEF";
    let color = '#';
    for(let i=0 ; i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]

    }
    return color;
};
 let interval
const startchangecolour = function(){
     interval =setInterval(chnagebg,1000);
    function chnagebg(){
    document.body.style.backgroundColor=randomcolor();
    };
}
const stopchangecolour = function(){
    clearInterval(interval);
    
}
document.querySelector('#start').addEventListener('click', startchangecolour);
document.querySelector('#stop').addEventListener('click', stopchangecolour);