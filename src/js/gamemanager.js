function rand(min, max) {
    let random = Math.floor(Math.random() * (max - min) + min);
    return Math.floor(random);
};


(function () {

    function GameManager() {
        let player1 = null;
        let player2 = null;

        updateLifeBar = () => {
            console.log(`${player1.name} current health is  ${parseInt(player1.currenthealth)}/${player1.maxHealth} --- ${player2.name} current health is  ${parseInt(player2.currenthealth)}/${player2.maxHealth}  `);
        };

        logs = (attack, defence) => {
            console.log(`${attack.name} attacked ${defence.name} with ${attack.item.name} dealing ${attack.item.damage} damage `);
        }
        
        player1attack = () => {
            let damage = player1.damage(player2);
            console.log(damage);



            if (player2.race === 'elf' && rand(0, 100) <= 30) {
                player1.currenthealth += damage / 2;
                console.log(`${player2.name} reflected half of the damage taken !`)
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
            // let player1race = querychoice;
            // let player2race = querychoice;
            
            // let player1item = querychoice;
            // let player1item = querychoice;

            
            button1 = new sword;
            button2 = new staff;
            button3 = new bow;
            button4 = new boots;

            player1 = new orc('Garrosh', button3);
            player2 = new elf('Sylvanas', button4);

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
                alert(`Congratulation, ${player2.name} won this time ! `);
            } else if (player2.currenthealth <= 0) {
                player1.currenthealth = 0;
                alert(`Congratulation, ${player1.name} won this time ! `);
                console.log(player1.currenthealth);
            };
        };




        init()
        // for (i = 0; i < 5; i++) {
        //     turn();
        //     endGame();
        // };


        while(1){
            turn()
            endGame()
                if (player1.currenthealth <= 0 || player2.currenthealth <= 0) {    
                    let again = confirm('do you want to play again ?');
                    console.log(again);
            
                    if (again == true) {
                        GameManager();
                    };
                    return(0);  
                } // endgame loop ok
        };

    };


    GameManager();
})();