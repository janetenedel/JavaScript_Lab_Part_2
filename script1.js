let startGame = confirm("Do you want to start the game?");
if (startGame == false) {
  console.log("See you soon");

} else {
  let userName = prompt('What is your battle name?');
  userPlayer(userName);
  function userPlayer(userName) {
  console.log(`Your username is ${userName}. Let's start the game!`);
  console.log("");
}

let grantPoints = 10;
let userPoints = 40;
let user = userName;
let wins = 0;


while (wins < 3 && grantPoints >= 0) {
    let getRandomGrant = Math.floor(Math.random() * 2) + 1;
    let getRandomUser = Math.floor(Math.random() * 2) + 1;
    grantPoints -= getRandomGrant;
    userPoints -= getRandomUser;
    console.log(`${user} has ${userPoints} health points left, Grant the almighty has ${grantPoints} health points left`);
   
    
    if(grantPoints <= 0){
      wins++;
      console.log(`WIN #${wins} FOR ${user}!`);
      grantPoints = 10;
    } 
    if (wins === 3) {
      console.log(`${user} WINS!`);
    } 
    if (userPoints <= 0) {
      console.log(`GRANT THE ALMIGHTY WINS!`);
    } 
  }
}
