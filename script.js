// Array containing the possible words for the game
const words = [
  "JAVASCRIPT",
  "HANGMAN",
  "PROGRAMMING",
  "COMPUTER",
  "DEVELOPER",
  "WEBSITE",
  "CODING",
  "ALGORITHM",
];

let selectedWord = ""; // The word randomly selected for the current game
let guessedWord = []; // Array representing the current state of the guessed word (e.g. ['_', '_', 'A', '_'])
let incorrectGuesses = 0; // Counter for incorrect guesses
let guessedLetters = []; // Array storing the letters that have already been guessed
const maxIncorrectGuesses = 6; // Maximum number of incorrect guesses allowed before losing

// Get references to HTML elements
const wordToGuessElement = document.getElementById("word-to-guess");
const hangmanImageElement = document.getElementById("hangman-image");
const guessedLettersElement = document.getElementById("guessed-letters");
const letterInputElement = document.getElementById("letter-input");
const guessButton = document.getElementById("guess-button");
const messageElement = document.getElementById("message");
const restartButton = document.getElementById("restart-button");

// Initialize or reset the game
function initializeGame() {
  // Select a random word from the array
  selectedWord = words[Math.floor(Math.random() * words.length)];
  // Create an array of underscores representing unguessed letters
  guessedWord = Array(selectedWord.length).fill("_");
  incorrectGuesses = 0; // Reset incorrect guesses
  guessedLetters = []; // Clear guessed letters
  messageElement.textContent = ""; // Clear message
  letterInputElement.value = ""; // Clear input field
  letterInputElement.disabled = false; // Enable input
  guessButton.disabled = false; // Enable guess button
  restartButton.style.display = "none"; // Hide restart button
  updateDisplay(); // Update the display to show initial state
}

// Update the word display and guessed letters list
function updateDisplay() {
  wordToGuessElement.textContent = guessedWord.join(" ");
  guessedLettersElement.textContent = guessedLetters.join(", ");
}

// Handle the player's guess
function handleGuess() {
  // Get the guessed letter, convert to uppercase
  const guess = letterInputElement.value.toUpperCase();
  letterInputElement.value = ""; // Clear input field

  // Validate input: must be a single letter A-Z
  if (!guess.match(/[A-Z]/) || guess.length !== 1) {
    messageElement.textContent = "Please enter a single letter.";
    return;
  }

  // Check if letter was already guessed
  if (guessedLetters.includes(guess)) {
    messageElement.textContent = `You already guessed '${guess}'.`;
    return;
  }

  guessedLetters.push(guess); // Add letter to guessed letters

  if (selectedWord.includes(guess)) {
    // If the guess is correct, reveal all occurrences
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === guess) {
        guessedWord[i] = guess;
      }
    }
    messageElement.textContent = "Good guess!";
  } else {
    // If the guess is incorrect, update image and increment counter
    incorrectGuesses++;
    hangmanImageElement.src = `images/hangman_${incorrectGuesses}.png`;
    messageElement.textContent = "Wrong guess!";
  }

  updateDisplay(); // Update word and guessed letters display
  checkGameStatus(); // Check if the game is over (win/lose)
}

// Check if the player has won or lost
function checkGameStatus() {
  if (guessedWord.join("") === selectedWord) {
    messageElement.textContent = "Congratulations! You guessed the word!";
    endGame(true);
  } else if (incorrectGuesses >= maxIncorrectGuesses) {
    messageElement.textContent = `Game Over! The word was '${selectedWord}'.`;
    endGame(false);
  }
}

// End the game by disabling input and showing the restart button
function endGame(win) {
  letterInputElement.disabled = true;
  guessButton.disabled = true;
  restartButton.style.display = "block";
}

// Event listeners for user interaction
guessButton.addEventListener("click", handleGuess);
letterInputElement.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleGuess();
  }
});
restartButton.addEventListener("click", initializeGame);

// Start the game when the page loads
initializeGame();
