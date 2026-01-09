const winnerText = document.querySelector("#MainTitle");
const boxes = document.querySelectorAll(".box");
const gameBoard = document.querySelector(".game");
const newGameBtn = document.querySelector(".newGame");
const resetBtn = document.querySelector(".resetGame");

let turnX = true;
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!gameActive || box.innerText !== "") return;

        box.innerText = turnX ? "X" : "O";
        box.classList.add("disCursor");

        checkWinner();
        turnX = !turnX;
    });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

function checkWinner() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const v1 = boxes[a].innerText;
        const v2 = boxes[b].innerText;
        const v3 = boxes[c].innerText;

        if (v1 && v1 === v2 && v1 === v3) {
            winnerText.innerText = `Player ${v1} Wins!`;
            gameActive = false;
            gameBoard.classList.add("lock");
            return;
        }
    }

    if ([...boxes].every(box => box.innerText !== "")) {
        winnerText.innerText = "It's a Draw!";
        gameActive = false;
    }
}

function resetGame() {
    turnX = true;
    gameActive = true;
    winnerText.innerText = "Tic Tac Toe";
    gameBoard.classList.remove("lock");

    boxes.forEach(box => {
        box.innerText = "";
        box.classList.remove("disCursor");
    });
}
