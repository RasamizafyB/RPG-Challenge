


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

//function to reset the color if something else is picked.
function playerOnePickedRace(race) {
    if(selectedRace1) { // remove the existing highlight if any
    selectedRace1.target.style.borderColor = 'black';
}
    selectedRace1 = race;
    selectedRace1.target.style.borderColor = 'brown';
}


function playerTwoPickedRace(race) {
    if(selectedRace2) {
    selectedRace2.target.style.borderColor = 'black';
}
    selectedRace2 = race;
    selectedRace2.target.style.borderColor = 'blue';
}

function playerOnePickedItem(item) {
    if(selectedItem1) {
    selectedItem1.target.style.borderColor = '#888'
    }
    selectedItem1 = item
    selectedItem1.target.style.borderColor = 'brown'
}

function playerOnePickedItem(item) {
    if(selectedItem2) {
    selectedItem2.target.style.borderColor = '#888'
    }
    selectedItem2 = item
    selectedItem2.target.style.borderColor = 'brown'
}


const races1 = document.querySelector('.race');
let selectedRace1;

const races2 = document.querySelector('.race2');
let selectedRace2;

const item1 = document.querySelector('.item');
let selectedItem1;

const item2 = document.querySelector('.item2');
let selectedItem2;

    //player one select race
races1.addEventListener('click', (element) => {

    element.target.style.borderColor = 'brown';
    console.log(element.target);

    playerOnePickedRace(element);
});

    //player two select race
races2.addEventListener('click', (element) => {

    element.target.style.borderColor = 'brown';
    console.log(element.target);

    playerTwoPickedRace(element);
});

    //player one select item
item1.addEventListener('click', (element) => {

    element.target.style.borderColor = 'brown';
    console.log(element.target);

    playerOnePickedItem(element);
});

    //player two select item
item2.addEventListener('click', (element) => {

    element.target.style.borderColor = 'brown';
    console.log(element.target);

    playerOnePickedItem(element);
});
