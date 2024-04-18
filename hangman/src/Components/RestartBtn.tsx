import styles from "./RestartBtn.module.css";

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

  return (
    <button className={styles.btn} onClick={handleRestart}>
      Restart
    </button>
  );
}
