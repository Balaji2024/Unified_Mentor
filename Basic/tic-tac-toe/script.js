document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("status");
    const resetButton = document.getElementById("reset-button");

    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let isGameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWin = () => {
        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }
        return false;
    };

    const checkTie = () => {
        return board.every(cell => cell !== "");
    };

    const updateStatus = () => {
        if (checkWin()) {
            statusText.textContent = `Player ${currentPlayer} Wins! 🎉`;
            isGameActive = false;
        } else if (checkTie()) {
            statusText.textContent = "It's a Tie! 🤝";
            isGameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            statusText.textContent = `Player ${currentPlayer}'s Turn`;
        }
    };

    const handleCellClick = (event) => {
        const cell = event.target;
        const index = cell.getAttribute("data-index");

        if (board[index] !== "" || !isGameActive) return;

        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add("taken");

        updateStatus();
    };

    const resetGame = () => {
        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        isGameActive = true;

        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("taken");
        });

        statusText.textContent = `Player X's Turn`;
    };

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetGame);
});
