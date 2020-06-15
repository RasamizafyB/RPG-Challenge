class player {
    constructor(race, item, currenthealth, maxHealth) {
            this.race = race;
            this.item = item;
            this.currenthealth = currenthealth;
            this.maxHealth = maxHealth;
    };

    heal(){
        if (this.item.name === 'staff') {
            this.currenthealth += 12;
        } else {
            this.currenthealth += 10;
        }
    };

    damage(enemy){
        if(this.item.name === 'sword'){
            enemy.currenthealth -= 13;
        } else {
            enemy.currenthealth -= 10;
        };
    };

    toString() {
        console.log(`I am a ${this.race}, I wield a ${this.item.name}, my total health point are ${this.currenthealth}`);
    };
};

class orc extends player {
    constructor(item) {
        super('orc', item, 140, 140);
    };
};

class elve extends player {
    constructor(item) {
        super('elve', item, 100, 100);
    };
};

class human extends player {
    constructor(item) {
        super('human', item, 100, 100);
    };
};

class vampire extends player {
    constructor(item) {
        super('vampire', item, 100, 100);
    };
};






// document.getElementById("run").addEventListener("click", function() {

//     const cat1 = new Cat('Skitty', 9);
//     const cat2 = new Cat('Pixel', 6);

//     console.log(cat1, cat2);
// });


// function player(race, item, currenthealth, maxHealth) {
//     this.race = race;
//     this.item = item;
//     this.currenthealth = currenthealth;
//     this.maxHealth = maxHealth;
    

//     // this.heal = function(){};

//     // this.damage = function(){};

//     // this.totalDamage = this.damage();

//     // this.displayChar = function(){
//     //     return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
//     // };
// }