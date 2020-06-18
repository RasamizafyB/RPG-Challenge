function rand(min, max) {
    let random = Math.floor(Math.random() * (max - min) + min);
    return Math.floor(random);
};


// (function () {

    function GameManager() {
        let player1 = null;
        let player2 = null;


        updateLifeBar = () => {
            console.log(`${player1.race} current health is  ${parseInt(player1.currenthealth)}/${player1.maxHealth} --- ${player2.race} current health is  ${parseInt(player2.currenthealth)}/${player2.maxHealth}  `);
        };

        logs = (attack, defense) => {
            console.log(`${attack.race} attacked ${defense.race} with ${attack.item.name} dealing ${attack.item.damage} damage `);
        }
        
        player1attack = () => {
            let damage = player1.damage(player2);
            console.log(damage);



            if (player2.race === 'elf' && rand(0, 100) <= 30) {
                player1.currenthealth += damage / 2;
                console.log(`${player2.race} reflected half of the damage taken !`)
                console.log(damage / 2);
            }
            player2.currenthealth += damage;
        };


        player2attack = () => {
            let damage = player2.damage(player1);
            console.log(damage);
            player1.currenthealth += damage;

        };

        init = function () {

            
            // console.log(racePlayer1);
            // console.log(racePlayer2)
            
            ;switch (itemPlayer1) {
                case 'sword':
                    itemPlayer1 = new sword ();
                    break;
                    
                case 'bow':
                    itemPlayer1 = new bow ();
                    break;
                    
                case 'staff':
                    itemPlayer1 = new staff ();
                    break;
                    
                case 'boots':
                    itemPlayer1 = new boots ();
                    break;
            
                default:
                    break;
            };
            
            switch (itemPlayer2) {
                case 'sword':
                    itemPlayer2 = new sword ();
                    break;
                    
                case 'bow':
                    itemPlayer2 = new bow ();
                    break;
                    
                case 'staff':
                    itemPlayer2 = new staff ();
                    break;
                    
                case 'boots':
                    itemPlayer2 = new boots ();
                    break;
            
                default:
                    break;
            };

            // console.log(itemPlayer2);    
            // console.log(itemPlayer1);    
            
            switch (racePlayer1) {
                case 'orc':
                    player1 = new orc (itemPlayer1);
                    break;
                    
                case 'humain':
                    player1 = new human (itemPlayer1);
                    break;
                    
                case 'vampire':
                    player1 = new vampire (itemPlayer1);
                    break;
                    
                case 'elfe':
                    player1 = new elf (itemPlayer1);
                    break;
            
                default:
                    break;
            };

            switch (racePlayer2) {
                case 'orc':
                    player2 = new orc (itemPlayer2);
                    break;
                    
                case 'humain':
                    player2 = new human (itemPlayer2);
                    break;
                    
                case 'vampire':
                    player2 = new vampire (itemPlayer2);
                    break;
                    
                case 'elfe':
                    player2 = new elf (itemPlayer2);
                    break;
            
                default:
                    break;
            };

            
            console.log(player1);    
            console.log(player2);    

            player1.initChar();
            player2.initChar();
        };

        turn = function () {


            // player1.heal();

            // player2.heal();



            logs(player1, player2);
            player1attack()

            


            logs(player2, player1);
            player2attack()

            // updateLifeBar();


            // turn player 2
            // updateLifeBar();



            if (player1.race === 'vampire') {
                player1.regen(player2);
            } else if (player2.race === 'vampire') {
                player2.regen(player1);
            }

            updateLifeBar();
        };

        endGame = function () {
            if (player1.currenthealth <= 0) {
                player2.currenthealth = 0;
                alert(`Congratulation, ${player2.race} won this time ! `);
            } else if (player2.currenthealth <= 0) {
                player1.currenthealth = 0;
                alert(`Congratulation, ${player1.race} won this time ! `);
                console.log(player1.currenthealth);
            };
        };




        // init()
        // for (i = 0; i < 2; i++) {
        //     turn();
        //     endGame();
        // };


        // while(1){
        //     turn()
        //     endGame()
        //         if (player1.currenthealth <= 0 || player2.currenthealth <= 0) {    
        //             let again = confirm('do you want to play again ?');
        //             console.log(again);
            
        //             if (again == true) {
        //                 GameManager();
        //             };
        //             return(0);  
        //         } // endgame loop ok
        // };

    };

    GameManager();

// })();