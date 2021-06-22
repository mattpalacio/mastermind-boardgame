import styled from 'styled-components';

export default function Header({ history }) {
  return (
    <Container>
      <Title>
        <h1>Mastermind</h1>
        <small>the boardgame</small>
      </Title>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  padding: 1em 1.5em;
  border-bottom: 1px solid var(--black);
  margin-bottom: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  h1 {
    line-height: 1;
  }

  small {
    align-self: flex-end;
    line-height: 1;
    position: relative;
    display: flex;
    align-items: center;
  }
`;
