type RestartBtnProps = {
  clearLetters: React.Dispatch<React.SetStateAction<string[]>>;
  newWord: React.Dispatch<React.SetStateAction<string>>;
  getWord: () => string;
};

export function RestartBtn({
  clearLetters,
  newWord,
  getWord,
}: RestartBtnProps) {
  const handleRestart = () => {
    clearLetters([]);
    newWord(getWord);
  };

  return <button onClick={handleRestart}>Restart</button>;
}
