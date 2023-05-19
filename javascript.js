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

function playOneGame() {
    // appel du choix du joueur
    let player = getUserChoice();
    // appel du choix de l'ordinateur
    let comp = getComputerChoice();
    // comparaison et message

// si les 2 sont égaux
    if (player === comp) {
        console.log(`Tie ! ${player} is the same as ${comp}`);
        return 0;
    } else if (player === "Rock") {
        if (comp === "Paper") {
            console.log(`You Lose! ${comp} beats ${player}`);
            return 0;
        } else if (comp === "Scissors") {
            console.log(`You Won! ${player} beats ${comp}`);
            return 1;
        } else {
            console.log("erreur");
        }
    } else if (player === "Paper") {
        if (comp === "Scissors") {
            console.log(`You Lose! ${comp} beats ${player}`);
            return 0;
        } else if (comp === "Rock") {
            console.log(`You Won! ${player} beats ${comp}`);
            return 1;
        } else {
            console.log("erreur");
        }
    } else if (player === "Scissors") {
        if (comp === "Rock") {
            console.log(`You Lose! ${comp} beats ${player}`);
            return 0;
        } else if (comp === "Paper") {
            console.log(`You Won! ${player} beats ${comp}`);
            return 1;
        } else {
            console.log("erreur");
        }
    }
}


function game(nbgames) {
// crée une variabloe score

// lance une boucle qui va tourner 5 fois
/*    lance la partie
    incrémente le score 
    si score < 2 affiche gagnant
    sinon affiche perdant */

    let score = 0;

    for (let i = 0; i < nbgames; i++) {
        score += playOneGame();
    }
    if (score >= (nbgames /2)) {
        console.log(`Your score is ${score}. You Won !`);
    } else {
        console.log(`Your score is ${score}. You lose :(`);
    }

}