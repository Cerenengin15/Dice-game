let images = [
    "zar1.jpeg",
    "zar2.jpeg",
    "zar3.jpeg",
    "zar4.jpeg",
    "zar5.jpeg",
    "zar6.jpeg"
];

let playerScores = {A:0,B:0}; //skorları tutmak için nesne oluşturuldu.
function roll(player) { //parametre oluşturarak hangi oyuncunun zarının atılacağını belirleme
    let diceVal = Math.floor(Math.random() * 6);
    console.log("ceren consola tıkladı",diceVal+1); //indexler 0'dan başladığı için +1 ekledim.
    let dice = document.getElementById(`zar${player === 'A' ? 1 : 2}`); //üçlü operatör sayesinde hangi zarın değiştirileceği belirlenir.

    dice.setAttribute("src", images[diceVal]);
    playerScores[player] = diceVal + 1;

    if (playerScores.A > 0 && playerScores.B > 0) { // İki oyuncu da butona tıkladıktan sonra sonuç alırız.
        checkWinner();
    }
}

function checkWinner() {
    let resultText = "";
    if (playerScores.A > playerScores.B) {
        resultText = "Player A Kazandı!";
    } else if (playerScores.A < playerScores.B) {
        resultText = "Player B Kazandı!";
    } else {
        resultText = "Berabere!";
    }
    document.getElementById("result").textContent = resultText;
    playerScores = { A: 0, B: 0 }; 
}