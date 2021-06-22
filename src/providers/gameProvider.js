import { createContext, useState } from 'react';
import colors from '../data/colors';

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [secretCode, setSecretCode] = useState([]);
  const [guess, setGuess] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasPlayerWon, setHasPlayerWon] = useState(false);

  function initializeGame() {
    const colorsArr = Object.keys(colors);
    let randomColorsArr = [];
    let i = 0;

    //generate secret code
    while (i < 4) {
      const randomIndex = Math.floor(Math.random() * (colorsArr.length - 0));
      const randomColor = colorsArr[randomIndex];

      randomColorsArr = [...randomColorsArr, randomColor];

      i++;
    }

    setSecretCode(randomColorsArr);
    setHasGameStarted(true);
  }

  function endGame() {
    setSecretCode([]);
    setGuesses([]);
    setHasPlayerWon(false);
    setIsGameOver(false);
    setHasGameStarted(false);
  }

  function decode() {
    let blackHints = [];
    let whiteHints = [];
    let hintsArr = [];

    if (guess.length !== secretCode.length) return;

    // compute black hints
    const mappedCodeArr = guess.map((code) => code.color);

    secretCode.forEach((code, index) => {
      if (code === mappedCodeArr[index]) blackHints = [...blackHints, 'black'];
    });

    if (blackHints.length === secretCode.length) {
      hintsArr = [...blackHints];

      setGuesses([...guesses, { code: guess, hints: hintsArr }]);
      setGuess([]);
      setHasPlayerWon(true);
    } else {
      // compute white hints
      secretCode.forEach((code) => {
        const codeIndex = mappedCodeArr.indexOf(code);

        if (codeIndex >= 0) {
          mappedCodeArr.splice(codeIndex, 1);
          whiteHints = [...whiteHints, 'white'];
        }
      });

      let i = 0;

      while (i < blackHints.length) {
        whiteHints.pop();
        i++;
      }

      hintsArr = [...blackHints, ...whiteHints];

      setGuesses([...guesses, { code: guess, hints: hintsArr }]);
      setGuess([]);
    }
  }

  return (
    <GameContext.Provider
      value={{
        secretCode,
        setSecretCode,
        guess,
        setGuess,
        guesses,
        setGuesses,
        hasGameStarted,
        setHasGameStarted,
        isGameOver,
        setIsGameOver,
        hasPlayerWon,
        initializeGame,
        endGame,
        decode,
      }}>
      {children}
    </GameContext.Provider>
  );
}
