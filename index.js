const boxes = document.querySelectorAll('.box');
let currentPlayer = 'X';
let gameOver = false;

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            boxes[a].textContent &&
            boxes[a].textContent === boxes[b].textContent &&
            boxes[a].textContent === boxes[c].textContent
        ) {
            boxes[a].style.backgroundColor = 'green';
            boxes[b].style.backgroundColor = 'green';
            boxes[c].style.backgroundColor = 'green';
            gameOver = true;
            alert(`${currentPlayer} wins!`);
            return;
        }
    }
}

function handleClick(e) {
    const box = e.target;
    const index = box.dataset.index;

    if (!box.textContent && !gameOver) {
        box.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

boxes.forEach(box => {
    box.addEventListener('click', handleClick);
});
