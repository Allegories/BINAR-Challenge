let hasilGame = document.getElementById('hasil');
let tulisanVS = document.getElementById('vs');



 //random object dan ambil pilihan computer
 function getComChoice() {
    
    const choices = ["gunting", "batu", "kertas"];
    const randomNumber = Math.floor(Math.random() * 3);
    let comChoice = choices[randomNumber]
    return choices[randomNumber];
}



//event listener click dan ambil pilihan computer
function getPlayerChoice() {
    // Initialize dom
    let playerBatu = document.getElementById("player-batu")
    let playerGunting = document.getElementById("player-gunting")
    let playerKertas = document.getElementById("player-kertas")

    let combatu = document.getElementById("com-batu")
    let comhunting = document.getElementById("com-gunting")
    let comkertas = document.getElementById("com-kertas")

    // adding .selected class
    playerBatu.addEventListener("click", e => {
        hasilGame.classList.remove("hidden");
        resetSelector();
        playerBatu.classList.add("selected")
        tulisanVS.classList.add("hidden");
        game("batu");
    })

    playerGunting.addEventListener("click", e => {
        hasilGame.classList.remove("hidden");
        resetSelector();
        playerGunting.classList.add("selected")
        tulisanVS.classList.add("hidden");
        game("gunting");
    })

    playerKertas.addEventListener("click", e => {
        hasilGame.classList.remove("hidden");
        resetSelector();
        playerKertas.classList.add("selected")
        tulisanVS.classList.add("hidden");
        game("kertas");
    })

    // removing .selected class
    const resetSelector = () => {
        playerBatu.classList.remove('selected');
        playerGunting.classList.remove('selected');
        playerKertas.classList.remove('selected');
    }


    // reset Game
    const reset = document.getElementById("refresh");
    reset.addEventListener("click", e => {
        resetSelector()
        hasilGame.classList.add("hidden")
        tulisanVS.classList.remove("hidden");
    })

}

getPlayerChoice()


// function untuk nentuin siapa yang menang
function game(playerChoice) {
    const comChoice = getComChoice();
   

    switch (playerChoice + comChoice) {
        // Player Win Case
        case "batugunting":
        case "guntingkertas":
        case "kertasbatu":
            playerWin()
            break;

        // Computer Win Case
        case "guntingbatu":
        case "kertasgunting":
        case "batukertas":
            comWin()
            break;

        // Draw
        case "guntinggunting":
        case "kertaskertas":
        case "batubatu":
            draw()
            break;

    }


}


function playerWin() {
    hasilGame.innerHTML = "PLAYER 1 MENANG SELAMAT";
}

function comWin() {
    hasilGame.innerHTML = "HAHAHA KALAHH";
}

function draw() {
    hasilGame.innerHTML = "DRAW!";
}
