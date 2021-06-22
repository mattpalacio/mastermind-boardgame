import { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from '../providers/gameProvider';

export default function IndexPage({ history }) {
  const { initializeGame } = useContext(GameContext);

  function handleStartGame() {
    initializeGame();
    history.push('/gameboard');
  }

  return (
    <Container>
      <p>Welcome to the classic code-breaking boardgame called Mastermind</p>
      <ButtonsWrapper>
        <h2>Play a game?</h2>
        <button onClick={handleStartGame}>Play</button>
        <button onClick={() => history.push('/rules')}>Rules</button>
      </ButtonsWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: min(100%, 20em);
    margin-bottom: 2em;
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.6;
  }
`;

const ButtonsWrapper = styled.div`
  width: min(100%, 20em);
  height: 10em;
  padding: 1em;
  border-radius: 1em;
  margin-block: auto;
  box-shadow: 8px 8px 16px #d9d7d1, -8px -8px 16px #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 1rem;
  }

  & > button {
    width: 100%;
    padding-block: 0.4em;
    border: none;
    border-radius: 0.5em;
    font-size: 1rem;
    background-color: var(--darkBlue);
    color: var(--white);
    cursor: pointer;

    &:first-of-type {
      background-color: var(--lightBlue);
    }
  }

  & > button + button {
    margin-top: 0.5em;
  }
`;
