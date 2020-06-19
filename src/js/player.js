class player {
    constructor(item, race, currenthealth, maxHealth) {
        // this.name = name;
        this.item = item;
        this.race = race;
        this.currenthealth = currenthealth;
        this.maxHealth = maxHealth;
    };
    

    // yield(){
    //     // if button yield press => player conceed
    // }

    heal() {
        let logflow = document.querySelector('body > main > footer > div > div');

        if (this.item.name === 'staff') {
            this.currenthealth += 12;
            logflow.innerHTML += `<p>${this.race} heal for 12</p>` 
        } else {
            this.currenthealth += 10;
            logflow.innerHTML += `<p>${this.race} heal for 10</p>` 
        };
    };

    damage(target) {
        let logflow = document.querySelector('body > main > footer > div > div');
        let outputDamage = 0

        switch (true) {
            case (this.item.name === 'bow'): {
                if (rand(0, 100) <= 30) {   //bow 30% chance to hit twice
                    outputDamage -= 20;
                    console.log(`${this.name} hitted twice !`);

                    setTimeout(() => {
                        logflow.innerHTML += `<p>${this.race} hitted twice !</p>`;
                    },  200)
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
            outputDamage -= (outputDamage / 100) * 20;
        }


        if (target.item.name == 'boots' && rand(0, 100) <= 30) {   //bow 30% dodge chances from boots
            outputDamage = 0;
            console.log(`${target.race} dodged !`);

            setTimeout(() => {
                logflow.innerHTML += `<p>${target.race} dodged !</p>`;
            },  200)
        };

        // console.log(outputDamage)
        return (outputDamage);
    };

    initChar() {
        let logflow = document.querySelector('body > main > footer > div > div');
        // console.log(`im the ${this.race}, I wield a ${this.item.name}, my maximum health point are ${this.currenthealth}`);w
        logflow.innerHTML += `<p>im the ${this.race}, I wield a ${this.item.name}, my maximum health point are ${this.currenthealth}</p>`
    };
};

class orc extends player {
    constructor(item) {
        super(item, 'orc', 140, 140);
    };
};

class elf extends player {
    constructor(item) {
        super(item, 'elf', 100, 100);
    };
};

class human extends player {
    constructor(item) {
        super(item, 'human', 90, 90);
    };
};

class vampire extends player {
    constructor(item) {
        super(item, 'vampire', 60, 60);
    };

    regen(target) {
        let logflow = document.querySelector('body > main > footer > div > div');

        if (this.item.name = 'staff') { // 20% healing from staff
            this.currenthealth += parseInt(((target.currenthealth / 100) * 10) * 1.2);
            console.log(`${this.race} lifesteal for  ${parseInt(((target.currenthealth / 100) * 10) * 1.2)}`);
            logflow.innerHTML += `<p>${this.race} lifesteal for  ${parseInt(((target.currenthealth / 100) * 10) * 1.2)}</p>`
        } else {
            this.currenthealth += (target.currenthealth / 100) * 10;
            console.log(`${this.race} lifesteal for  ${parseInt(((target.currenthealth / 100) * 10) * 1.2)}`);
            logflow.innerHTML += `<p>${this.race} lifesteal for  ${parseInt(((target.currenthealth / 100) * 10) * 1.2)}</p>`
        };
    };

};

