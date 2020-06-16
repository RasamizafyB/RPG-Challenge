function rand(min, max) {
    let random = Math.floor(Math.random() * (max - min) + min);
    return Math.floor(random);
};


class player {
    constructor(race, item, currenthealth, maxHealth) {
        this.race = race;
        this.item = item;
        this.currenthealth = currenthealth;
        this.maxHealth = maxHealth;
    };

    // yield(){
    //     // if button yield press => player conceed
    // }

    heal() {
        if (this.item.name === 'staff') {
            this.currenthealth += 12;
        } else {
            this.currenthealth += 10;
        };
    };

    damage(target) {
        let outputDamage = 0

        switch (true) {
            case (this.item.name === 'bow'): {
                if (rand(0, 100) <= 30) {   //bow 30% chance to hit twice
                    outputDamage -= 20;
                    console.log(`${this.race} hitted twice !`);
                    break;
                } else {
                    outputDamage -= 10;
                    break;
                };
            };
            case (this.item.name === 'sword'): {
                outputDamage -= 13;
                break;
            }; 
            default:
                outputDamage -= 10;
        };


        if (target.race == 'human') { // human 20% damage reduction
            outputDamage -= (outputDamage /100 ) *20;
        }

        console.log(outputDamage)

        if (target.item.name == 'boots' && rand(0, 100) <= 30) {   //bow 30% dodge chances from boots
            outputDamage = 0;
            console.log(`${target.race} dodged !`);
        };

        return(target.currenthealth += outputDamage)
    };

    initChar() {
        console.log(`I am a ${this.race}, I wield a ${this.item.name}, my maximum health point are ${this.maxHealth}`);
    }

    toString() {
        console.log(`I am a ${this.race}, I wield a ${this.item.name}, my current health point are ${this.currenthealth}`);
    };
    }

class orc extends player {
    constructor(item) {
        super('orc', item, 140, 140);
    };
};


class elf extends player {
    constructor(item) {
        super('elf', item, 100, 100);
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

    regen(target) {
        if (this.item.name = 'staff') { // 20% healing from staff
            this.currenthealth += ((target.currenthealth / 100) * 10) * 1.2;
            console.log(`${this.race} lifesteal for  ${((target.currenthealth / 100) * 10) * 1.2}`);
        } else{
        this.currenthealth += (target.currenthealth / 100) * 10;
        console.log(`${this.race} lifesteal for  ${(target.currenthealth / 100) * 10}`);
        }
    }

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