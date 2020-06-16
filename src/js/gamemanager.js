

(function() {
    
    function GameManager(){
        let player1 = null;
        let player2 = null;

        updateLifeBar = () =>{
            console.log(`${player1.race} current health is  ${parseInt(player1.currenthealth)}/${player1.maxHealth} --- ${player2.race} current health is  ${parseInt(player2.currenthealth)}/${player2.maxHealth}  `);
        };

        logs = (attack, defence) =>{

            console.log(`${attack.race} attacked ${defence.race} with ${attack.item.name} dealing ${attack.item.damage} damage `);
        }

        init = function(){
            button1 = new sword;
            button2 = new staff;
            button3 = new bow;
            button4 = new boots;

            // player1 = document.querySelector("orc");
            player1 = new orc(button1);
            player2 = new elf(button2);

            player1.initChar();
            player2.initChar();
        };

        turn = function() {
            let damageTaken = player2.currenthealth
            console.log(damageTaken);
            
            //turn player 1
            logs(player1, player2);

            player1.damage(player2);

            // updateLifeBar();


            // turn player 2
            // updateLifeBar();
            // logs(player2, player1)
            
            player2.heal();
            

            if (player1.race === 'vampire') {
                player1.regen(player2);
            } else if (player2.race === 'vampire') {
                player2.regen(player1);
            }

            
            // if (player1.race === 'elf' && rand(0, 100) <= 30) {
            //     player1.currenthealth -= outputDamage / 2;
            // } else if (player2.race === 'elf' && rand(0, 100) <= 30) {
            //     player1.currenthealth -= outputDamage / 2;
            // }

            updateLifeBar();
        };

        endGame = function() {
            if (player1.currenthealth <= 0) {
                player2.currenthealth = 0;
                alert(`Congratulation, ${player2.race} won this time ! `);
            } else if (player2.currenthealth <= 0) {
                player1.currenthealth = 0;
                alert(`Congratulation, ${player1.race} won this time ! `);
                console.log(player1.currenthealth);
            };
        };


        init();
        for (i = 0; i < 5; i++) {
            turn();
            endGame();
        };


        // while(1){
        //     turn()
        //     endGame()
        //     if (player1.currenthealth <= 0 || player2.currenthealth <= 0) return(0);
        // };
    };
    




    GameManager();
})();





// let player3 = new orc(sword);


// player1.toString();
// player2.toString();
// player3.toString();

// player1.damage(player2);
// player2.heal();
