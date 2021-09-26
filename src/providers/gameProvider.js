import { createContext, useState, useRef, useEffect } from 'react';
import colors from '../data/colors';

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [secretCode, setSecretCode] = useState([]);
  const [guess, setGuess] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasPlayerWon, setHasPlayerWon] = useState(false);
  const dummyRef = useRef();

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
  }

  function endGame() {
    setSecretCode([]);
    setGuesses([]);
    setHasPlayerWon(false);
    setIsGameOver(false);
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

  useEffect(() => {
    hasPlayerWon
      ? setIsGameOver(true)
      : guesses.length === 12
      ? setIsGameOver(true)
      : setIsGameOver(false);
  }, [guesses, hasPlayerWon, setIsGameOver]);

  return (
    <GameContext.Provider
      value={{
        secretCode,
        setSecretCode,
        guess,
        setGuess,
        guesses,
        setGuesses,
        isGameOver,
        setIsGameOver,
        hasPlayerWon,
        initializeGame,
        endGame,
        decode,
        dummyRef,
      }}>
      {children}
    </GameContext.Provider>
  );
}
