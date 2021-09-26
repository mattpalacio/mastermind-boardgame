import { useContext } from 'react';
import { GameContext } from '../providers/gameProvider';
import colors from '../data/colors';
import Board from '../components/Board';
import ColorSelector from '../components/ColorSelector';
import Modal from '../components/Modal';
import styled from 'styled-components';

export default function GameboardPage() {
  const { secretCode, hasPlayerWon, isGameOver, endGame } =
    useContext(GameContext);

  return (
    <Container>
      <Board />
      {isGameOver ? (
        <Modal>
          <Card>
            <h1>Game Over</h1>
            <p>
              {hasPlayerWon
                ? 'You have successfully broken the secret code!'
                : 'You have failed to break the secret code.'}
            </p>

            <SecretCode>
              {secretCode.map((code) => (
                <div style={{ backgroundColor: `${colors[code]}` }} />
              ))}
            </SecretCode>

            <button onClick={endGame}>End Game</button>
          </Card>
        </Modal>
      ) : (
        <ColorSelector />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: min(100%, 17em);
  padding: 1em;
  border-radius: 1em;
  background-color: var(--baseBg);
  text-align: center;
  box-shadow: 2px 2px 4px var(--shadowBg), 4px 4px 8px var(--shadowBg),
    8px 8px 16px var(--shadowBg);

  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1em;
  }

  button {
    width: 100%;
    padding-block: 0.4em;
    border-radius: 0.5em;
    border: none;
    background-color: var(--darkBlue);
    color: var(--white);
    font-size: 1rem;
    cursor: pointer;
  }
`;

const SecretCode = styled.div`
  width: 100%;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;

  & > div {
    --size: calc(2.25em + 2.25vmin);

    width: var(--size);
    height: var(--size);
    border-radius: 50%;
  }
`;
