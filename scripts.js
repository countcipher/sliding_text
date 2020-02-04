var heading = document.getElementById("heading");
var initial_heading = document.getElementById("initial_heading");
var msg = ["Hello", "World", "I", "Have", "Done", "It"];
var i = 0;

setTimeout(function(){
    
    
    initial_heading.style.display = "none";
    heading.style.display = "block";    
    
}, 3000);

setInterval(function(){
    
    i++;
    if(i == msg.length){
        
        i = 0;
        
    }
    
    heading.classList.remove("slide");
    heading.innerHTML = msg[i];
    heading.classList.add("hide");
    
    setTimeout(function(){
        
        heading.classList.add("slide");
        
    }
    
    
    ,500);
    
}, 3000);