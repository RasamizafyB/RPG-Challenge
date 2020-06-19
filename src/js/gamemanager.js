function rand(min, max) {
    let random = Math.floor(Math.random() * (max - min) + min);
    return Math.floor(random);
};


setTimeout(() => {

    init();
    turn();

}, 100);

function GameManager() {
    let player1 = null;
    let player2 = null;


    updateLifeBar = () => {

        console.log(`${player1.race} current health is  ${parseInt(player1.currenthealth)}/${player1.maxHealth} --- ${player2.race} current health is  ${parseInt(player2.currenthealth)}/${player2.maxHealth}  `);

        let lifePlayerOne = document.querySelector('section.player-1 > div.health-bar > progress');
        let lifePlayertwo = document.querySelector('section.player-2 > div.health-bar > progress');

        lifePlayerOne.setAttribute('max', `${player1.maxHealth}`);
        lifePlayertwo.setAttribute('max', `${player2.maxHealth}`);

        lifePlayerOne.setAttribute('value', `${player1.currenthealth}`);
        lifePlayertwo.setAttribute('value', `${player2.currenthealth}`);

        if (player1.currenthealth > player1.maxHealth) player1.currenthealth = player1.maxHealth;
        if (player2.currenthealth > player2.maxHealth) player2.currenthealth = player2.maxHealth;

        // if (player1.currenthealth <= (player1.maxHealth/100)*20) lifePlayerOne.setAttribute('progress[value]', 'background-color: red;');
        // if (player2.currenthealth <= (player2.maxHealth/100)*20) lifePlayerOne.setAttribute('progress[value]', 'background-color: red;');

    };

    logs = (attack, defense) => {
        let logflow = document.querySelector('body > main > footer > div > div');
        let humandef = (attack.item.damage / 100) * 80
        // console.log(`${attack.race} attacked ${defense.race} with ${attack.item.name} dealing ${attack.item.damage} damage `);


        if (defense.race == 'human') { // human 20% damage reduction
            logflow.innerHTML += `<p>${attack.race} attacked ${defense.race} with ${attack.item.name} dealing ${humandef} damage    </p>`;
        } else {
            logflow.innerHTML += `<p>${attack.race} attacked ${defense.race} with ${attack.item.name} dealing ${attack.item.damage} damage    </p>`;
        }

    };



    init = function () {

        let racePlayer1 = localStorage.getItem('raceplayer1');
        let itemPlayer1 = localStorage.getItem('itemplayer1');
        let racePlayer2 = localStorage.getItem('raceplayer2');
        let itemPlayer2 = localStorage.getItem('itemplayer2');
        // console.log(racePlayer1);
        // console.log(itemPlayer1);
        // console.log(racePlayer2);
        // console.log(itemPlayer2);
        document.querySelector('section.player-1 > div.img-name > img').setAttribute('src', `src/image/${racePlayer1}.jpg`);
        document.querySelector('section.player-2 > div.img-name > img').setAttribute('src', `src/image/${racePlayer2}.jpg`);
        document.querySelector('section.player-1 > div.name > h3').innerText = racePlayer1;
        document.querySelector('section.player-2 > div.name > h3').innerText = racePlayer2;



        switch (itemPlayer1) {
            case 'sword':
                itemPlayer1 = new sword();
                break;

            case 'bow':
                itemPlayer1 = new bow();
                break;

            case 'staff':
                itemPlayer1 = new staff();
                break;

            case 'boots':
                itemPlayer1 = new boots();
                break;

            default:
                break;
        };

        switch (itemPlayer2) {
            case 'sword':
                itemPlayer2 = new sword();
                break;

            case 'bow':
                itemPlayer2 = new bow();
                break;

            case 'staff':
                itemPlayer2 = new staff();
                break;

            case 'boots':
                itemPlayer2 = new boots();
                break;

            default:
                break;
        };

        // console.log(itemPlayer2);
        // console.log(itemPlayer1);

        switch (racePlayer1) {
            case 'orc':
                player1 = new orc(itemPlayer1);
                break;

            case 'humain':
                player1 = new human(itemPlayer1);
                break;

            case 'vampire':
                player1 = new vampire(itemPlayer1);
                break;

            case 'elfe':
                player1 = new elf(itemPlayer1);
                break;

            default:
                break;
        };

        switch (racePlayer2) {
            case 'orc':
                player2 = new orc(itemPlayer2);
                break;

            case 'humain':
                player2 = new human(itemPlayer2);
                break;

            case 'vampire':
                player2 = new vampire(itemPlayer2);
                break;

            case 'elfe':
                player2 = new elf(itemPlayer2);
                break;

            default:
                break;
        };




        console.log(player1);
        console.log(player2);

        player1.initChar();
        player2.initChar();
    };


    let i = 1;

    turn = function () {
        let logflow = document.querySelector('body > main > footer > div > div');
        updateLifeBar();

        player1attack = () => {
            logs(player1, player2);

            let damage = player1.damage(player2);
            (damage);

            if (player2.race === 'elf' && rand(0, 100) <= 30) {
                player1.currenthealth += damage / 2;
                console.log(damage / 2);

                setTimeout(() => {
                    logflow.innerHTML += `<p>${player1.race} reflected half of the damage taken !</p>`;
                }, 250)
            }

            player2.currenthealth += damage;
            updateLifeBar();
            endturn();
            // console.log(damage);
        };

        player2attack = () => {
            logs(player2, player1);

            let damage = player2.damage(player1);

            if (player1.race === 'elf' && rand(0, 100) <= 30) {
                player2.currenthealth += damage / 2;
                console.log(damage / 2);

                setTimeout(() => {
                    logflow.innerHTML += `<p>${player1.race} reflected half of the damage taken !</p>`;
                }, 250)
            }

            player1.currenthealth += damage;

            updateLifeBar();
            endturn();
            console.log(i);
            // console.log(damage);
        };

        player1heal = () => {
            player1.heal();
            updateLifeBar();
            endturn();
        }

        player2heal = () => {
            player2.heal();
            updateLifeBar();
            endturn();
        }

        document.querySelector('section.player-1 > div.action-btn > a.hit1').addEventListener('click', () => {
            player1attack();
            endturn();
        });

        document.querySelector('section.player-2 > div.action-btn > a.hit2').addEventListener('click', () => {
            player2attack();
        });

        document.querySelector('section.player-1 > div.action-btn > a.heal1').addEventListener('click', () => {
            player1heal();
            endturn();
        });

        document.querySelector('section.player-2 > div.action-btn > a.heal2').addEventListener('click', () => {
            player2heal();
            endturn();
        });

        endturn();
    };

    endturn = () => {
        if (i === 1) {
            document.querySelector('section.player-2 > div.action-btn').setAttribute('style', 'display: none;');
            document.querySelector('section.player-1 > div.action-btn').setAttribute('style', 'display: flex;');
            i++;
        } else if (i === 2) {
            document.querySelector('section.player-1 > div.action-btn').setAttribute('style', 'display: none;');
            document.querySelector('section.player-2 > div.action-btn').setAttribute('style', 'display: flex;');
            i++;
            // console.log(i);

        } else if (i >= 3) {
            if (player1.race === 'vampire') {
                player1.regen(player2);
            } else if (player2.race === 'vampire') {
                player2.regen(player1);
            }

            updateLifeBar();
            endGame();
            i = 1;
        }
    }

    endGame = function () {
        let again;

        switch (true) {
            case player1.currenthealth <= 0:
                alert(`Congratulation, ${player2.race} won this time ! `);
                alert(`If you want to change race, press the cross button next to your card`);
                location.reload();
                break;
            case player2.currenthealth <= 0:
                alert(`Congratulation, ${player1.race} won this time ! `);
                alert(`If you want to change race, press the cross button next to your card`);
                location.reload();
                break;
            default:
                break;
        }
        // if (player1.currenthealth <= 0) {
        //     alert(`Congratulation, ${player2.race} won this time ! `);
        //     // again()
        // } else if (player2.currenthealth <= 0) {
        //     alert(`Congratulation, ${player1.race} won this time ! `);
        //     console.log(player1.currenthealth);
        //     // again()
        // };
    };
};

GameManager();  