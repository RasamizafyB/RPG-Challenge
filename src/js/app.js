// typewriting effect
var text = document.querySelector('.target').innerText;
document.querySelector('.target').innerText = '';

var textArray = text.split("");

function loop() {
    if (textArray.length > 0) {
        document.querySelector('.target').innerHTML += textArray.shift();
    } else {
        clearTimeout();
    };
};

if (textArray != textArray.length) {
    var tiner = setInterval(loop, 100);
} else {
    document.querySelector('.target').innerText = '';
};

// palyer selections
// create variables to work on the different part of the screen and be able to return them to GameManager file
const races1 = document.querySelector('.race');
let selectedRace1;
let racePlayer1;

const races2 = document.querySelector('.race2');
let selectedRace2;
let racePlayer2;

const item1 = document.querySelector('.item');
let selectedItem1;
let itemPlayer1;

const item2 = document.querySelector('.item2');
let selectedItem2;
let itemPlayer2;

// functions to reset the color if something else is picked and return the item the player have selected in readable data for the GameManager.js
function playerOnePickedRace(race) {
    if (selectedRace1) { // remove the existing highlight if any
        selectedRace1.target.style.borderColor = 'black';
    };

    selectedRace1 = race;
    selectedRace1.target.style.borderColor = 'brown';

    racePlayer1 = race.target.getAttribute('src');
    racePlayer1 = racePlayer1.substring(11, racePlayer1.length -4);
    
    console.log(racePlayer1);
    localStorage.setItem('raceplayer1', racePlayer1);
    return(racePlayer1);
};

function playerTwoPickedRace(race) {
    if (selectedRace2) {
        selectedRace2.target.style.borderColor = 'black';
    };

    selectedRace2 = race;
    selectedRace2.target.style.borderColor = 'blue';

    racePlayer2 = race.target.getAttribute('src');
    racePlayer2 = racePlayer2.substring(11, racePlayer2.length -4);
    
    console.log(racePlayer2);
    localStorage.setItem('raceplayer2', racePlayer2);
    return(racePlayer2);
};

function playerOnePickedItem(item) {
    if (selectedItem1) {
        selectedItem1.target.style.borderColor = '#888';
    };

    selectedItem1 = item;
    selectedItem1.target.style.borderColor = 'brown';

    itemPlayer1 = item.target.getAttribute('src');
    itemPlayer1 = itemPlayer1.substring(10, itemPlayer1.length -4);
    
    console.log(itemPlayer1);
    localStorage.setItem('itemplayer1', itemPlayer1);
    return(itemPlayer1);
};

function playerTwoPickedItem(item) {
    if (selectedItem2) {
        selectedItem2.target.style.borderColor = '#888';
    }

    selectedItem2 = item;
    selectedItem2.target.style.borderColor = 'blue';

    itemPlayer2 = item.target.getAttribute('src');
    itemPlayer2 = itemPlayer2.substring(10, itemPlayer2.length -4);
    
    console.log(itemPlayer2);
    localStorage.setItem('itemplayer2', itemPlayer2);
    return(itemPlayer2);
};

// addEventListener to change color on click
//player one select race
races1.addEventListener('click', (element) => {
    element.target.style.borderColor = 'brown';
    // console.log(element.target);

    playerOnePickedRace(element);
});

//player two select race
races2.addEventListener('click', (element) => {
    element.target.style.borderColor = 'brown';
    // console.log(element.target);

    playerTwoPickedRace(element);
});

//player one select item
item1.addEventListener('click', (element) => {
    element.target.style.borderColor = 'brown';
    // console.log(element.target);

    playerOnePickedItem(element);
});

//player two select item
item2.addEventListener('click', (element) => {
    element.target.style.borderColor = 'blue';
    // console.log(element.target);
    playerTwoPickedItem(element);
});