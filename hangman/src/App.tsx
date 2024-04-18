import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./Components/HangmanDrawing";
import { HangmanWord } from "./Components/HangmanWord";
import { Keyboard } from "./Components/Keyboard";
import { RestartBtn } from "./Components/RestartBtn";
import "./App.css";

function App() {
  /* random word to guess */
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  /* state for word to guess */
  const [wordToGuess, setWordToGuess] = useState(getWord);

  /* state for guessed letters */
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  /* incorrect letters */
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  /* correct letters */
  const correctLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  /* Win - Lose logic */
  const isLoser = incorrectLetters.length >= 6;

  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  /* add guessed letter if it hasn't been guessed yet */
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
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
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && (
          <>
            <h1
              style={{
                fontFamily: "monospace",
                fontSize: "6rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "1rem",
                color: "#5ddd72",
              }}
            >
              Winner!
            </h1>
            <RestartBtn
              clearLetters={setGuessedLetters}
              newWord={setWordToGuess}
              getWord={getWord}
            />
          </>
        )}
        {isLoser && (
          <>
            <h1
              style={{
                fontFamily: "monospace",
                fontSize: "3.5rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "1rem",
                color: "#ff4949",
              }}
            >
              Nice Try
            </h1>
            <RestartBtn
              clearLetters={setGuessedLetters}
              newWord={setWordToGuess}
              getWord={getWord}
            />
          </>
        )}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={correctLetters}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
