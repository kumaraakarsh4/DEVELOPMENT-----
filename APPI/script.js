const requesturl = 'https://api.github.com/users/Aakarshkumar'
const picurl = "https://avatars.githubusercontent.com/u/86540895?v=4" 
const xhr = new XMLHttpRequest();
 xhr.open('GET' , requesturl,picurl);
// console.log("Here")
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState===4) {
        const data = JSON.parse(this.responseText);
        console.log(typeof data);
        
        console.log(data);
        
        
    }
    
}
xhr.send();