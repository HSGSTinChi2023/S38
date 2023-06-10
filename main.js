let inputs = Array.from(document.getElementsByClassName("number"));
let board = Array(16).fill(null);
let winning = true;

function start() {
    inputs.forEach(input => {
        input.addEventListener("change", typing);
    })
}

function typing(e) {
    let index = e.target.id;
    board[index] = e.target.value;
}

let submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click", submitGame);
function submitGame() {
    if (board[0] != board[6] - board[4]) winning = false;
    if (board[1] != board[9] + board[12]) winning = false;
    if (board[2] != board[4] / board[14]) winning = false;
    if (board[3] != board[15] - board[7] && board[3] != board[15] / board[14]) winning = false;
    if (board[4] != board[11] + 12 && board[4] != board[11] - 12) winning = false;
    if (board[5] != board[3] / board[2]) winning = false;
    if (board[6] != board[15] - board[11]) winning = false;
    if (board[7] != board[0] / 2 && board[7] != board[0] * 2) winning = false;
    if (board[8] != board[5] * board[14]) winning = false;
    if (board[9] != board[11] + board[12]) winning = false;
    if (board[10] != board[13] - board[1] && board[10] != board[13] - board[6]) winning = false;
    if (board[10] != 16 && board[10] != 17) winning = false;
    if (board[10] != board[12] / board[14] && board[10] != board[12] + board[14]) winning = false;
    if (board[13] != board[7] - board[8] && board[13] != board[7] + board[8]) winning = false;
    if (board[14] != board[11] / 4) winning = false;
    if (board[15] != board[1] - board[4] && board[15] != board[1] + board[4]) winning = false;
    if (winning) {
        alert("correct!");
    } else {
        alert("incorrect!");
    }
}

let restartbtn = document.getElementById("restartbtn");
restartbtn.addEventListener("click", restartGame);
function restartGame() {
    winning = true;
    board.fill(null);
    inputs.forEach(input => {
        input.value = "";
    });
}

start();