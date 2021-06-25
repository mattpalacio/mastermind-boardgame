import { useContext } from 'react';
import styled from 'styled-components';
import colors from '../data/colors';
import { GameContext } from '../providers/gameProvider';

export default function ColorSelector() {
  const { secretCode, guess, setGuess, decode, dummyRef } =
    useContext(GameContext);

  const colorsArr = Object.keys(colors).map((color) => ({
    color,
    hex: colors[color],
  }));

  function addColor(code) {
    if (guess.length >= secretCode.length) return;

    setGuess([...guess, code]);
  }

  function clearGuess() {
    setGuess([]);
  }

  function submitGuess() {
    decode();
    setGuess([]);

    dummyRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  return (
    <Container>
      <Colors>
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            onClick={() => addColor(colorsArr[i])}
            style={{ backgroundColor: `${colorsArr[i].hex}` }}></div>
        ))}
      </Colors>
      <Buttons>
        <button onClick={submitGuess} disabled={guess.length < 4}>
          Decode
        </button>
        <button onClick={clearGuess} disabled={guess.length < 1}>
          Clear
        </button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  width: min(100vw, 460px);
  padding: 1em;
  border-radius: 0.4em;
  background: var(--baseBg);
  box-shadow: 0 -2px 4px var(--shadowBg), 0 -4px 8px var(--shadowBg),
    0 -8px 16px var(--shadowBg);
  position: sticky;
  bottom: 1vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Colors = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    --size: calc(2.2em + 2vmin);

    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;

  & > button {
    flex: 1 1 100%;
    padding-block: 0.75em;
    border-radius: 0.5em;
    border: none;
    background-color: var(--darkBlue);
    color: var(--white);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;

    &:first-of-type {
      background-color: var(--lightBlue);
    }

    &[disabled] {
      background-color: var(--darkerGray);
      color: var(--white);
    }
  }
`;
