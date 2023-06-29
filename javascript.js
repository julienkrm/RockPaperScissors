
// selecting the paragraph with the result

let displayresult = document.querySelector("#roundresult") ;
displayresult.innerHTML = "Que la partie commence !";
// Creating a function that will return one of the 3 possible choices :

function getComputerChoice() {
    let choice = "";
    let possiblesChoices = ["fire", "plant", "water"];
    // fonction qui retourne aléatoirement O, 1 ou 2 :
    choice = possiblesChoices[Math.floor(Math.random() * 3)];
    console.log("The computer has chosen " + choice);
    return choice;
}




// créer une fonction qui compare les 2 ? function compareChoices(player) 

function playOneGame(player) {
    // appel du choix de l'ordinateur
    let comp = getComputerChoice();
    // comparaison et message
// si les 2 sont égaux
    if (player === comp) {
        console.log(`Tie ! ${player} is the same as ${comp}`);
        return "tie";
    } else if (player === "fire") {
        if (comp === "water") {
            console.log(`You Lose! ${comp} beats ${player}`);
            return "computer";
        } else if (comp === "plant") {
            console.log(`You Won! ${player} beats ${comp}`);
            return "player";
        } else {
            console.log("erreur");
        }
    } else if (player === "water") {
        if (comp === "plant") {
            console.log(`You Lose! ${comp} beats ${player}`);
            return "computer";
        } else if (comp === "fire") {
            console.log(`You Won! ${player} beats ${comp}`);
            return "player";
        } else {
            console.log("erreur");
        }
    } else if (player === "plant") {
        if (comp === "fire") {
            console.log(`You Lose! ${comp} beats ${player}`);
            return "computer";
        } else if (comp === "water") {
            console.log(`You Won! ${player} beats ${comp}`);
            return "player";
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

// lancement de la fonction playOneGame quand on clique sur une des images

const fireimg =  document.getElementById("fire");

 fireimg.addEventListener('click', () => {
    playOneGame("fire");
    });     

const plantimg =  document.getElementById("plant");

plantimg.addEventListener('click', () => {
    playOneGame("plant");
    }); 

const waterimg =  document.getElementById("water");

waterimg.addEventListener('click', () => {
    playOneGame("water");
    }); 
