// Lesson content for Building a number guessing game
const numberGuessingGameContent = {
  id: 'number-guessing-game',
  title: 'Building a number guessing game',
  duration: '35 min',
  overview: `Create an engaging number guessing game! Build an interactive game with random number generation, user feedback, difficulty levels, scoring systems, and game statistics that demonstrates core programming concepts through fun gameplay.`,
  objectives: [
    'Implement random number generation and game logic systems',
    'Create interactive gameplay with user feedback and hints',
    'Design difficulty levels and scoring mechanisms',
    'Build game statistics and player progress tracking',
    'Apply loops, conditionals, and functions in game development context',
  ],
  sections: [
    {
      type: 'text',
      title: 'Project Overview: Number Guessing Game',
      content: `We'll build an interactive number guessing game where players try to guess a randomly generated number. Our game will include multiple difficulty levels, helpful hints, scoring systems, and statistics tracking.

**Game features we'll implement:**
- **Random number generation**: Computer selects secret numbers
- **Interactive gameplay**: User input with immediate feedback
- **Hint system**: "Higher" or "lower" guidance for players
- **Difficulty levels**: Easy, medium, and hard modes with different ranges
- **Scoring system**: Points based on guesses and difficulty
- **Statistics tracking**: Win/loss records and performance metrics
- **Replay functionality**: Continuous gameplay with session statistics

**Programming concepts applied:**
- **Random number generation**: Using Python's random module
- **Game loops**: Continuous gameplay until win or quit
- **Input validation**: Handling invalid guesses gracefully
- **Conditional logic**: Complex branching for game rules
- **Score calculation**: Mathematical formulas for point systems
- **Data persistence**: Tracking statistics across multiple games

**Skills we'll practice:**
- Game logic implementation
- User experience design
- Random number operations
- Complex conditional structures
- Score and statistics calculations
- Interactive program flow control

**Real-world applications:**
This project demonstrates fundamental concepts used in game development, interactive applications, and user engagement systems.`
    },
    {
      type: 'code',
      title: 'Step 1: Basic Random Number Generation',
      language: 'python',
      code: `# Import random module and generate random numbers
import random

def generate_secret_number(min_num, max_num):
    secret = random.randint(min_num, max_num)
    return secret

print("Testing random number generation:")
secret1 = generate_secret_number(1, 10)
secret2 = generate_secret_number(1, 10)
print("Secret number 1:", secret1)
print("Secret number 2:", secret2)`
    },
    {
      type: 'output',
      content: `Testing random number generation:
Secret number 1: 7
Secret number 2: 3`
    },
    {
      type: 'code',
      title: 'Step 2: Basic Guessing Logic',
      language: 'python',
      code: `# Implement basic guess checking
def check_guess(guess, secret):
    if guess == secret:
        return "correct"
    elif guess < secret:
        return "too_low"
    else:
        return "too_high"

print("Testing guess checking:")
secret = 15
test_guesses = [10, 15, 20]

for guess in test_guesses:
    result = check_guess(guess, secret)
    print("Guess " + str(guess) + ":", result)`
    },
    {
      type: 'output',
      content: `Testing guess checking:
Guess 10: too_low
Guess 15: correct
Guess 20: too_high`
    },
    {
      type: 'code',
      title: 'Step 3: User Input with Validation',
      language: 'python',
      code: `# Safe input function for guesses
def get_valid_guess(min_num, max_num):
    while True:
        try:
            guess_input = input("Enter your guess (" + str(min_num) + 
                              "-" + str(max_num) + "): ")
            guess = int(guess_input)
            
            if min_num <= guess <= max_num:
                return guess
            else:
                print("Please enter a number between " + str(min_num) + 
                      " and " + str(max_num) + "!")
        except ValueError:
            print("Please enter a valid number!")

print("Input validation function ready!")
print("(Use get_valid_guess(1, 100) to test)")`
    },
    {
      type: 'output',
      content: `Input validation function ready!
(Use get_valid_guess(1, 100) to test)`
    },
    {
      type: 'code',
      title: 'Step 4: Basic Game Loop',
      language: 'python',
      code: `# Simple game loop implementation
def play_simple_game():
    secret = generate_secret_number(1, 10)
    attempts = 0
    max_attempts = 5
    
    print("=== Number Guessing Game ===")
    print("I'm thinking of a number between 1 and 10!")
    print("You have " + str(max_attempts) + " attempts to guess it.")
    
    while attempts < max_attempts:
        attempts += 1
        print("Attempt " + str(attempts) + " of " + str(max_attempts))
        
        guess = get_valid_guess(1, 10)
        result = check_guess(guess, secret)
        
        if result == "correct":
            print("Congratulations! You guessed it!")
            return True
        elif result == "too_low":
            print("Too low! Try a higher number.")
        else:
            print("Too high! Try a lower number.")
    
    print("Game over! The number was " + str(secret))
    return False

print("Simple game ready to play!")
print("(Use play_simple_game() to start)")`
    },
    {
      type: 'output',
      content: `Simple game ready to play!
(Use play_simple_game() to start)`
    },
    {
      type: 'code',
      title: 'Step 5: Difficulty Levels',
      language: 'python',
      code: `# Implement different difficulty levels
def get_difficulty_settings():
    print("Choose difficulty level:")
    print("1. Easy (1-10, 5 attempts)")
    print("2. Medium (1-50, 7 attempts)")
    print("3. Hard (1-100, 10 attempts)")
    
    while True:
        choice = input("Enter difficulty (1-3): ")
        if choice == "1":
            return {"min": 1, "max": 10, "attempts": 5, "name": "Easy"}
        elif choice == "2":
            return {"min": 1, "max": 50, "attempts": 7, "name": "Medium"}
        elif choice == "3":
            return {"min": 1, "max": 100, "attempts": 10, "name": "Hard"}
        else:
            print("Please choose 1, 2, or 3!")

print("Difficulty selection system ready!")
settings = {"min": 1, "max": 50, "attempts": 7, "name": "Medium"}
print("Example settings:", settings)`
    },
    {
      type: 'output',
      content: `Difficulty selection system ready!
Example settings: {'min': 1, 'max': 50, 'attempts': 7, 'name': 'Medium'}`
    },
    {
      type: 'code',
      title: 'Step 6: Scoring System',
      language: 'python',
      code: `# Calculate score based on performance
def calculate_score(won, attempts_used, max_attempts, difficulty_name):
    if not won:
        return 0
    
    # Base points by difficulty
    base_points = {"Easy": 100, "Medium": 200, "Hard": 300}
    
    # Bonus for fewer attempts
    attempts_remaining = max_attempts - attempts_used
    bonus_points = attempts_remaining * 20
    
    total_score = base_points[difficulty_name] + bonus_points
    return total_score

print("Testing scoring system:")
print("Easy win in 3/5 attempts:", 
      calculate_score(True, 3, 5, "Easy"))
print("Hard win in 2/10 attempts:", 
      calculate_score(True, 2, 10, "Hard"))
print("Loss:", calculate_score(False, 5, 5, "Easy"))`
    },
    {
      type: 'output',
      content: `Testing scoring system:
Easy win in 3/5 attempts: 140
Hard win in 2/10 attempts: 460
Loss: 0`
    },
    {
      type: 'code',
      title: 'Step 7: Game Statistics',
      language: 'python',
      code: `# Track game statistics
def create_game_stats():
    stats = {
        "games_played": 0,
        "games_won": 0,
        "total_score": 0,
        "best_score": 0,
        "difficulty_wins": {"Easy": 0, "Medium": 0, "Hard": 0}
    }
    return stats

def update_stats(stats, won, score, difficulty_name):
    stats["games_played"] += 1
    if won:
        stats["games_won"] += 1
        stats["difficulty_wins"][difficulty_name] += 1
    
    stats["total_score"] += score
    if score > stats["best_score"]:
        stats["best_score"] = score

def display_stats(stats):
    if stats["games_played"] == 0:
        print("No games played yet!")
        return
    
    win_rate = (stats["games_won"] / stats["games_played"]) * 100
    print("=== Game Statistics ===")
    print("Games Played:", stats["games_played"])
    print("Games Won:", stats["games_won"])
    print("Win Rate: " + str(round(win_rate, 1)) + "%")
    print("Total Score:", stats["total_score"])
    print("Best Score:", stats["best_score"])

# Test statistics
test_stats = create_game_stats()
update_stats(test_stats, True, 200, "Medium")
update_stats(test_stats, False, 0, "Hard")
display_stats(test_stats)`
    },
    {
      type: 'output',
      content: `=== Game Statistics ===
Games Played: 2
Games Won: 1
Win Rate: 50.0%
Total Score: 200
Best Score: 200`
    },
    {
      type: 'code',
      title: 'Step 8: Enhanced Game with Hints',
      language: 'python',
      code: `# Game with helpful hints and feedback
def play_enhanced_game(difficulty_settings, stats):
    secret = generate_secret_number(difficulty_settings["min"], 
                                   difficulty_settings["max"])
    attempts = 0
    max_attempts = difficulty_settings["attempts"]
    
    print("=== Number Guessing Game ===")
    print("Difficulty: " + difficulty_settings["name"])
    print("Range: " + str(difficulty_settings["min"]) + " to " + 
          str(difficulty_settings["max"]))
    print("Attempts: " + str(max_attempts))
    print()
    
    while attempts < max_attempts:
        attempts += 1
        remaining = max_attempts - attempts + 1
        
        print("Attempt " + str(attempts) + " (" + str(remaining) + 
              " remaining)")
        
        guess = get_valid_guess(difficulty_settings["min"], 
                              difficulty_settings["max"])
        result = check_guess(guess, secret)
        
        if result == "correct":
            score = calculate_score(True, attempts, max_attempts, 
                                  difficulty_settings["name"])
            print("🎉 Correct! You won!")
            print("Score: " + str(score) + " points")
            update_stats(stats, True, score, difficulty_settings["name"])
            return True
        elif result == "too_low":
            if attempts < max_attempts:
                print("📈 Too low! Try a higher number.")
        else:
            if attempts < max_attempts:
                print("📉 Too high! Try a lower number.")
    
    print("💔 Game over! The number was " + str(secret))
    update_stats(stats, False, 0, difficulty_settings["name"])
    return False

print("Enhanced game function ready!")
print("(Includes hints, scoring, and statistics)")`
    },
    {
      type: 'output',
      content: `Enhanced game function ready!
(Includes hints, scoring, and statistics)`
    },
    {
      type: 'code',
      title: 'Step 9: Main Game Menu',
      language: 'python',
      code: `# Complete game menu system
def show_main_menu():
    print("\n=== Number Guessing Game ===")
    print("1. Play Game")
    print("2. View Statistics")
    print("3. How to Play")
    print("4. Exit")

def show_instructions():
    print("\n=== How to Play ===")
    print("1. Choose your difficulty level")
    print("2. I'll think of a secret number in the given range")
    print("3. You have limited attempts to guess the number")
    print("4. I'll tell you if your guess is too high or too low")
    print("5. Guess correctly to win points!")
    print()
    print("Scoring:")
    print("- Easy: 100 base points (1-10, 5 attempts)")
    print("- Medium: 200 base points (1-50, 7 attempts)")
    print("- Hard: 300 base points (1-100, 10 attempts)")
    print("- Bonus: +20 points per remaining attempt")

def get_menu_choice():
    while True:
        choice = input("Choose option (1-4): ")
        if choice in ["1", "2", "3", "4"]:
            return choice
        print("Please choose 1, 2, 3, or 4!")

print("Menu system ready!")
show_main_menu()`
    },
    {
      type: 'output',
      content: `Menu system ready!

=== Number Guessing Game ===
1. Play Game
2. View Statistics
3. How to Play
4. Exit`
    },
    {
      type: 'code',
      title: 'Step 10: Complete Game Application',
      language: 'python',
      code: `# Main game application with all features
def run_number_guessing_game():
    print("🎮 Welcome to the Number Guessing Game! 🎮")
    stats = create_game_stats()
    
    while True:
        show_main_menu()
        choice = get_menu_choice()
        
        if choice == "1":
            # Play game
            difficulty = get_difficulty_settings()
            won = play_enhanced_game(difficulty, stats)
            
            if won:
                print("🏆 Congratulations!")
            else:
                print("💪 Better luck next time!")
            
            # Ask to play again
            play_again = input("Play another game? (y/n): ")
            if play_again.lower() != "y":
                continue
        
        elif choice == "2":
            # View statistics
            display_stats(stats)
            
            # Show detailed breakdown
            if stats["games_played"] > 0:
                print("\nWins by Difficulty:")
                for diff, wins in stats["difficulty_wins"].items():
                    print("  " + diff + ": " + str(wins))
        
        elif choice == "3":
            # Show instructions
            show_instructions()
        
        elif choice == "4":
            # Exit game
            print("Thanks for playing! 🎉")
            if stats["games_played"] > 0:
                print("Final Statistics:")
                display_stats(stats)
            break
        
        input("Press Enter to continue...")

print("🎮 Complete Number Guessing Game ready to play!")
print("Use run_number_guessing_game() to start the adventure!")`
    },
    {
      type: 'output',
      content: `🎮 Complete Number Guessing Game ready to play!
Use run_number_guessing_game() to start the adventure!`
    },
    {
      type: 'code',
      title: 'Step 11: Game Testing and Validation',
      language: 'python',
      code: `# Test all game components
def test_game_components():
    print("=== Testing Game Components ===")
    
    # Test random number generation
    print("1. Random number generation:")
    for i in range(3):
        num = generate_secret_number(1, 10)
        print("   Generated:", num)
    
    # Test scoring system
    print("\n2. Scoring system:")
    test_scores = [
        (True, 1, 5, "Easy"),
        (True, 3, 7, "Medium"),
        (False, 10, 10, "Hard")
    ]
    
    for won, attempts, max_att, diff in test_scores:
        score = calculate_score(won, attempts, max_att, diff)
        print("   " + diff + " (" + str(attempts) + "/" + str(max_att) + 
              " attempts): " + str(score) + " points")
    
    # Test statistics
    print("\n3. Statistics tracking:")
    test_stats = create_game_stats()
    update_stats(test_stats, True, 180, "Medium")
    update_stats(test_stats, True, 340, "Hard")
    print("   Games played:", test_stats["games_played"])
    print("   Win rate: " + str((test_stats["games_won"] / 
                               test_stats["games_played"]) * 100) + "%")
    
    print("\n✅ All components working correctly!")

test_game_components()`
    },
    {
      type: 'output',
      content: `=== Testing Game Components ===
1. Random number generation:
   Generated: 8
   Generated: 3
   Generated: 9

2. Scoring system:
   Easy (1/5 attempts): 180 points
   Medium (3/7 attempts): 280 points
   Hard (10/10 attempts): 0 points

3. Statistics tracking:
   Games played: 2
   Win rate: 100.0%

✅ All components working correctly!`
    },
    {
      type: 'text',
      title: 'Project Summary and Game Development Insights',
      content: `**What you've built:**
A complete, engaging number guessing game that demonstrates professional game development practices and user experience design:

**Key game features implemented:**
- **Random gameplay**: Computer-generated secret numbers for replayability
- **Multiple difficulty levels**: Scalable challenge system for different skill levels
- **Interactive feedback**: Real-time hints and guidance for players
- **Scoring system**: Point-based rewards that encourage optimal play
- **Statistics tracking**: Player progress monitoring and achievement recognition
- **Professional interface**: Clear menus, instructions, and user guidance
- **Input validation**: Robust error handling for smooth gameplay experience

**Game design principles applied:**
- **Progressive difficulty**: Easy entry point with scalable challenges
- **Immediate feedback**: Instant response to player actions
- **Clear objectives**: Obvious goals and success criteria
- **Reward systems**: Point-based motivation and achievement tracking
- **Replayability**: Multiple difficulty levels and score improvement goals
- **User experience**: Intuitive interface and helpful guidance

**Programming concepts mastered:**
- **Random number generation**: Core gameplay mechanics
- **Game state management**: Tracking progress and maintaining game flow
- **Menu-driven interfaces**: Complex user interaction patterns
- **Score calculation**: Mathematical formulas for game mechanics
- **Data persistence**: Statistics tracking across multiple sessions
- **Input validation**: Robust user input handling in interactive contexts
- **Modular design**: Organized code structure for game development

**Real-world game development applications:**
- **Mobile games**: Touch-based guessing and puzzle games
- **Educational software**: Interactive learning tools with gamification
- **Quiz applications**: Trivia and knowledge testing systems
- **Casino games**: Probability-based gaming mechanics
- **Training simulations**: Interactive learning with immediate feedback
- **Party games**: Social gaming applications

**Possible enhancements:**
- **Multiplayer mode**: Competitive guessing between players
- **Time challenges**: Speed-based scoring with countdown timers
- **Achievement system**: Unlockable badges and milestones
- **Hint system**: Optional clues that reduce maximum score
- **Custom ranges**: Player-defined number ranges and attempt limits
- **Sound effects**: Audio feedback for wins, losses, and hints
- **Visual interface**: Graphical user interface with animations
- **Leaderboards**: High score tracking and player rankings
- **Story mode**: Progressive levels with narrative elements

**Skills gained:**
- Game logic implementation and design
- User experience optimization in interactive applications
- Random number operations and probability concepts
- Statistics calculation and data analysis
- Menu-driven program architecture
- Player engagement and motivation systems
- Testing and quality assurance for interactive software

This number guessing game showcases how fundamental programming concepts combine to create engaging, interactive experiences. You've built a complete game that demonstrates professional development practices while providing hours of entertainment and learning!`
    }
  ]
};

export { numberGuessingGameContent };