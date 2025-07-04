# 🕹️ Hangman Game

## 📌 Description
This is a simple Hangman game built with **JavaScript**, **HTML**, and **CSS**. The player must guess the letters of a randomly selected word. The game ends when the player guesses the word or reaches the maximum number of wrong guesses.

---

## 🚀 Features
- Random word selection from a predefined list.
- Input validation: only single letters (A-Z) are accepted.
- Displays the current guessed word state.
- Displays the list of guessed letters.
- Updates the hangman image on incorrect guesses.
- Win and lose messages.
- Restart button to play again.

---

## 🖥️ How to Play
1. The game begins with a word hidden as underscores (e.g. `_ _ _ _ _`).
2. Enter a letter in the input box and click **Guess** or press **Enter**.
3. If the letter is in the word, it will appear in the correct positions.
4. If the letter is not in the word, a part of the hangman is drawn.
5. Win the game by revealing the entire word before reaching 6 wrong guesses.
6. Lose the game if the hangman drawing is completed.

---

## ⚙️ Game Logic Flow

[Page Loads]
↓
initializeGame()
↓
Random word selected → guessedWord filled with "_"
↓
[Player inputs letter → presses Guess or Enter]
↓
handleGuess()
→ Validate input (must be single letter A-Z)
→ Check if letter was already guessed
→ Add letter to guessedLetters
↓
If letter in word:
- Update guessedWord with letter
- Show "Good guess!" message
Else:
- Increment incorrectGuesses
- Show "Wrong guess!" message
↓
updateDisplay()
↓
checkGameStatus()
→ If guessedWord is complete → Win message → endGame()
→ If incorrectGuesses >= maxIncorrectGuesses → Lose message → endGame()
  
---

## 📝 Requirements

- A modern web browser (Chrome, Firefox, Edge, etc).
- No additional libraries or frameworks needed.

---

## 💡 Possible Improvements

- Add more words or use a word API. 
- Allow the player to guess the entire word.
- Add categories (e.g. animals, countries, movies).
- Improve the UI with animations or sounds.
- Track player statistics (wins/losses).


## ⚠️ License

This project is for educational purposes. You can modify and use it as you like.
