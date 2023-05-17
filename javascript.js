// Creating a function that will return one of the 3 possible choices :

function getComputerChoice() {
    let choice = "";
    let possiblesChoices = ["Rock", "Paper", "Scissors"];
    // fonction qui retourne aléatoirement O, 1 ou 2 :
    choice = possiblesChoices[Math.floor(Math.random() * 3)];
    console.log("The computer has chosen " + choice);
    return choice;
}

// A function that ask for 1, 2 ou 3, and returns a string with the 3 possible touches
function getUserChoice() {
    let userChoice = prompt("To play rock, enter 1. To play paper, enter 2. To play scissors, enter 3");
    switch (userChoice) {
        case "1" :
            console.log("You chose rock");
            return "Rock";
            break;
        case "2" :
            console.log("You chose paper");
            return "Paper";
            break;
        case "3" :
            console.log("You chose Scissors");
            return "Scissors";
        default :
            console.log("You didnt chose 1, 2 ou 3");
            break;
        
}
}

// créer une fonction qui compare les 2 ? function compareChoices(players, computers) 

function playOneGame(playerSelection, computerSelection) {
    // appel du choix du joueur


    // appel du choix de l'ordinateur


    // comparaison et message

    if (playerSelection
}