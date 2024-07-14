// Ludo Game in JavaScript

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
    return Math.floor(Math.random() * 6) + 1;
}

// Function to move a piece
function movePiece(color, piece, steps) {
    let currentPosition = board[color][piece];
    let newPosition = currentPosition + steps;

    if (newPosition > NUM_SQUARES) {
        return false;
    }

    if (newPosition === NUM_SQUARES) {
        board[color][piece] = NUM_SQUARES;
        return true;
    }

    // Check if the new position is a safe spot
    if (safeSpots[color].includes(newPosition)) {
        board[color][piece] = newPosition;
        return true;
    }

    // Check for collision with other pieces
    for (let otherColor of COLORS) {
        if (color !== otherColor && board[otherColor].includes(newPosition)) {
            return false;
        }
    }

    board[color][piece] = newPosition;
    return true;
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

// Function to check if a player has won
function isWinner(color) {
    return board[color].every(position => position === NUM_SQUARES);
}

// Main game loop
while (true) {
    console.log(`Current Board:`);
    console.log(board);
    console.log(`It's ${turn}'s turn.`);
    prompt(`Press Enter to roll the dice...`);

    let dice = rollDice();
    console.log(`${turn} rolled a ${dice}.`);

    let moved = false;

    for (let piece = 0; piece < NUM_PIECES; piece++) {
        if (movePiece(turn, piece, dice)) {
            moved = true;
            break;
        }
    }

    if (!moved) {
        console.log(`No valid moves. Skipping turn.`);
    }

    if (isWinner(turn)) {
        console.log(`${turn} wins!`);
        break;
    }

    nextTurn();
}
