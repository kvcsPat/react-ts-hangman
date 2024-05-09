type HangmanWordProps = {
  reveal?: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({
  reveal = false,
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) {
  return (
    <div
      className="word"
      style={{
        display: "flex",
        gap: ".25em",
        fontFamily: "monospace",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          style={{ borderBottom: ".1em solid white", borderRadius: "0.05em" }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal
                  ? "#ff4949"
                  : "white",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
