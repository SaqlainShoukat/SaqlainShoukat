import random

# Initialize the board
board = {
    'red': [0, 0, 0, 0],
    'green': [0, 0, 0, 0],
    'yellow': [0, 0, 0, 0],
    'blue': [0, 0, 0, 0]
}

# Position of safe spots for each color
safe_spots = {
    'red': [0, 8, 13, 21],
    'green': [5, 10, 18, 23],
    'yellow': [3, 15, 16, 17],
    'blue': [6, 11, 19, 24]
}

# Player positions
player_positions = {
    'red': [0, 0, 0, 0],
    'green': [0, 0, 0, 0],
    'yellow': [0, 0, 0, 0],
    'blue': [0, 0, 0, 0]
}

# Current turn (red, green, yellow, blue)
turn = 'red'

def roll_dice():
    return random.randint(1, 6)

def move_piece(color, piece, steps):
    current_position = player_positions[color][piece]
    new_position = current_position + steps
    
    if new_position > 27:
        return False
    
    if new_position == 27:
        player_positions[color][piece] = 27
        return True
    
    # Check if the new position is a safe spot
    if new_position in safe_spots[color]:
        player_positions[color][piece] = new_position
        return True
    
    # Check for collision with other pieces
    for other_color, positions in player_positions.items():
        if color != other_color and new_position in positions:
            return False
    
    player_positions[color][piece] = new_position
    return True

def next_turn():
    global turn
    if turn == 'red':
        turn = 'green'
    elif turn == 'green':
        turn = 'yellow'
    elif turn == 'yellow':
        turn = 'blue'
    elif turn == 'blue':
        turn = 'red'

def is_winner(color):
    return all(pos == 27 for pos in player_positions[color])

def print_board():
    print("Current Board:")
    for color, positions in player_positions.items():
        print(f"{color}:", positions)

# Main game loop
while True:
    print_board()
    print(f"It's {turn}'s turn.")
    input("Press Enter to roll the dice...")
    
    dice = roll_dice()
    print(f"{turn} rolled a {dice}.")
    
    moved = False
    
    for piece in range(4):
        if move_piece(turn, piece, dice):
            moved = True
            break
    
    if not moved:
        print("No valid moves. Skipping turn.")
    
    if is_winner(turn):
        print(f"{turn} wins!")
        break
    
    next_turn()
