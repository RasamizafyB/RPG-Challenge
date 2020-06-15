(function() {
//Use this script to generate your character
    function GameManager(){
        let player1 = null
        let player2 = null

        updateLifeBar = () =>{
            player1.toString();
            player2.toString();
        };

        init = function(){
            let sword = new item('sword');
            let staff = new item('staff');

            player1 = new orc(sword);
            player2 = new elve(staff);
            console.log(player1);
        };

        turn = function() {
            player1.damage(player2);
            // player2.heal();
            updateLifeBar();
        };

        endGame = function() {
            if (player1.currenthealth <= 0) {
                alert(`Congratulation, ${player1} won this time ! `)
            } else if (player2.currenthealth <= 0) {
                alert(`Congratulation, ${player2} won this time ! `)
            };
        }

        init();
        while(!endGame()){
            for (let i = 0; i < player.length; i++) {
                const element = player[i];
                turn()
            }
        }
    };

    GameManager();
})();





// let player3 = new orc(sword);


// player1.toString();
// player2.toString();
// player3.toString();

// player1.damage(player2);
// player2.heal();
