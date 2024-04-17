import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./Components/HangmanDrawing";
import { HangmanWord } from "./Components/HangmanWord";
import { Keyboard } from "./Components/Keyboard";

function App() {
  /* random word to guess */
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  /* variable for guessed letters */
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  /* incorrect letters */
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  /* correct letters */
  const correctLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  /* add guessed letter if it hasn't been guessed yet */
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  /* event listener for keypress */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetter]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "800px",
        margin: "0 auto",
        gap: "2rem",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          activeLetters={correctLetters}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
