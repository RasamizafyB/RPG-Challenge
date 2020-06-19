
let race1 
let race2

function moveHit1(){
    race1 = document.querySelector("body > main > section > section.player-1 > div.img-name > img")
    race1.style.transform = "translateX(570px)";

    race2 = document.querySelector("body > main > section > section.player-2 > div.img-name > img");
    race2.style.borderColor = "red"; 
    
    setTimeout(function(){
       race1.style.transform = "translateX(0px)";               
    }, 200);
    setTimeout(function(){
        race2.style.borderColor = "black";               
     }, 500);
            
}

function moveHial1(){
    race1 = document.querySelector("body > main > section > section.player-1 > div.img-name > img");
    race1.style.borderColor = " #2c75ff";
            
    setTimeout(function(){
        race1.style.borderColor = "black";       
    }, 600);            
}

function moveHit2(){
    race2 = document.querySelector("body > main > section > section.player-2 > div.img-name > img");
    race2.style.transform = "translateX(-570px)"; 

    race1 = document.querySelector("body > main > section > section.player-1 > div.img-name > img");
    race1.style.borderColor = "red";
            
    setTimeout(function(){
        race2.style.transform = "translateX(0px)";         
    }, 200); 
    
    setTimeout(function(){
        race1.style.borderColor = "black";               
     }, 500);
}

function moveHial2(){
    race2 = document.querySelector("body > main > section > section.player-2 > div.img-name > img");
    race2.style.borderColor = " #2c75ff";
            
    setTimeout(function(){
        race2.style.borderColor = "black";       
    }, 600);            
}


