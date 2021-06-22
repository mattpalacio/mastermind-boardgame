import { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from '../providers/gameProvider';

export default function ActiveRow() {
  const { guess } = useContext(GameContext);

  return (
    <Wrapper>
      <div>
        <Slots>
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              style={{
                backgroundColor:
                  guess.length >= i + 1 ? guess[i].hex : 'transparent',
                border: guess.length >= i + 1 && 'none',
              }}></div>
          ))}
        </Slots>

        <Hints>
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i}></div>
          ))}
        </Hints>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 1em 0;

  & > div {
    display: flex;
    gap: 1em;
    position: relative;
  }

  & > div::after {
    content: '';
    padding: 0.5em;
    border: 2px dashed var(--lightBlue);
    border-radius: 10px;
    position: absolute;
    top: -0.5em;
    right: -0.5em;
    bottom: -0.5em;
    left: -0.5em;
  }

  &:not(:last-of-type) {
    margin-bottom: 2em;
  }

  &:not(:last-of-type)::after {
    content: '';
    grid-column: 1 / -1;
    width: 95%;
    margin: 0 auto;
    height: 1em;
    border-radius: 0.5em;
    margin-top: 1em;
    box-shadow: inset 2px 2px 8px var(--shadowBg),
      inset -2px -2px 8px var(--highlightBg);
  }
`;

const Slots = styled.div`
  flex: 1 1 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div {
    --size: calc(2.125em + 2.125vmin);

    width: var(--size);
    height: var(--size);
    border: 2px dashed var(--darkgray);
    border-radius: 50%;
  }
`;

const Hints = styled.div`
  --size: calc(2.125em + 2.125vmin);

  width: var(--size);
  height: var(--size);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  & > div {
    --size: calc(0.875em + 0.875vmin);

    width: var(--size);
    height: var(--size);
    border: 2px dashed var(--darkgray);
    border-radius: 50%;
  }
`;
