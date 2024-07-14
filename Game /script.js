// Constants
const NUM_PIECES = 4;
const NUM_SQUARES = 28;
const COLORS = ['red', 'green', 'yellow', 'blue'];

// Initialize board and player positions
let board = {
    'red': new Array(NUM_PIECES).fill(0),
    'green': new Array(NUM_PIECES).fill(0),
    'yellow': new Array(NUM_PIECES).fill(0),
    'blue': new Array(NUM_PIECES).fill(0)
};

// Position of safe spots for each color
const safeSpots = {
    'red': [0, 8, 13, 21],
    'green': [5, 10, 18, 23],
    'yellow': [3, 15, 16, 17],
    'blue': [6, 11, 19, 24]
};

// Current turn (red, green, yellow, blue)
let turn = 'red';

// Function to roll a dice
function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('message').textContent = `${turn} rolled a ${dice}.`;

    movePiece(dice);
}

// Function to move a piece
function movePiece(steps) {
    let currentPosition = board[turn][0];
    let newPosition = currentPosition + steps;

    if (newPosition > NUM_SQUARES) {
        newPosition = NUM_SQUARES - (newPosition - NUM_SQUARES); // bounce back logic
    }

    // Update board position
    board[turn][0] = newPosition;

    // Update UI
    updateBoard();
}

// Function to switch turn
function nextTurn() {
    switch (turn) {
        case 'red':
            turn = 'green';
            break;
        case 'green':
            turn = 'yellow';
            break;
        case 'yellow':
            turn = 'blue';
            break;
        case 'blue':
            turn = 'red';
            break;
        default:
            break;
    }
}

// Function to update board UI
function updateBoard() {
    // Clear previous pieces
    document.querySelectorAll('.piece').forEach(piece => piece.remove());

    // Place pieces on the board
    COLORS.forEach(color => {
        board[color].forEach((position, index) => {
            if (position <= NUM_SQUARES) {
                let square = document.getElementById(`square${position}`);
                let piece = document.createElement('div');
                piece.className = 'piece';
                piece.style.backgroundColor = color;
                square.appendChild(piece);
            }
        });
    });

    // Check for winner
    if (board[turn][0] === NUM_SQUARES) {
        document.getElementById('message').textContent = `${turn} wins!`;
    } else {
        document.getElementById('message').textContent = `It's ${turn}'s turn.`;
    }
}

// Initial board setup
updateBoard();
