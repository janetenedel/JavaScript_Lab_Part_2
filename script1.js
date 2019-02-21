function startGame() {
  let startGame1 = "";

  while (startGame1 === "") {
    startGame1 = confirm("Do you want to start the game?");
    if (startGame1 == false) {
      console.log("See you soon");
      return;
    }

    else {
      function startCombat() {
        let userName = prompt('What is your battle name?');
        userPlayer(userName);
        function userPlayer(userName) {
          console.log(`Your battle name is ${userName}. Let's start the game!`);
          console.log("");
        }

        function getDamage(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }


        let grantPoints = 10;
        let userPoints = 40;
        let user = userName;
        let wins = 0;
        let attack = "";


        while (wins < 3 && grantPoints >= 0) {
          let attack = prompt(`Do you want to attack or quit?`);

          if (attack === "quit" || attack == null) {
            console.log(`${user} left the game`);
            return;
          }

          if (attack == "attack") {
            grantPoints -= getDamage(1, 5);
            userPoints -= getDamage(1, 5);
            console.log(`${user} has ${userPoints} health points left, Grant the almighty has ${grantPoints} health points left`);


            if (grantPoints <= 0) {
              wins++;
              console.log(`WIN #${wins} FOR ${user}!`);
              grantPoints = 10;

              if (wins === 3) {
                console.log(`${user} WINS!`);
                // break;
              }
              if (userPoints <= 0) {
                console.log(`GRANT THE ALMIGHTY WINS!`);
              }

            }
          }
        }
      } startCombat();
    }
  }
}
startGame();

