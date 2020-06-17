
//(function() {

    var text = document.querySelector('.target').innerText;
    document.querySelector('.target').innerText = '';

    var textArray = text.split("");

    function loop(){
        if(textArray.length > 0){
            document.querySelector('.target').innerHTML += textArray.shift();
        } else{
            clearTimeout()
        }
    }
    if(textArray != textArray.length){
        var tiner = setInterval(loop, 100)
    } else {
        document.querySelector('.target').innerText = '';
    }    
//})();


let clickOrc
let clickHuman
let clickVampire
let clickElfe


document.querySelector('.orc1').addEventListener('click', function(){
     clickOrc = true;
    
})
if(clickOrc == true){
    document.querySelector('img').style.borderColor = 'brown'
} else if(clickHuman = true){
    document.querySelector('img').style.borderColor = 'black'
}

document.querySelector('.human1').addEventListener('click', function(){
     clickHuman = true;
    if(clickHuman == true){
        document.querySelector('.human1 img').style.borderColor = 'brown'
    }
})

document.querySelector('.vampire1').addEventListener('click', function(){
     clickVampire = true;
    if(clickVampire == true){
        document.querySelector('.vampire1 img').style.borderColor = 'brown'
    }
})

document.querySelector('.elfe1').addEventListener('click', function(){
    let clickElfe = true;
    if(clickElfe == true){
        document.querySelector('.elfe1 img').style.borderColor = 'brown'
    }
})



