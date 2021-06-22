import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function RulesPage() {
  return (
    <Container>
      <h1>Rules </h1>
      <p>
        The objective of the game is to break the computer-generated secret
        code. The secret code is a combination of any of the six colors
        available and may consist of multiples of the same color.
      </p>
      <p>
        Every time a player attempts to break the secret code, the computer will
        generate hints for that particular combination that the player has made.
      </p>
      <ul>
        <li>
          Black hint indicates a player-input color is in the secret code and in
          the right position.
        </li>
        <li>
          White hint indicates a player-input color is in the secret code but in
          the wrong position.
        </li>
        <li>
          No hint indicates a player-input color does not appear in the secret
          code.
        </li>
      </ul>
      <p>
        Note: Hint placement is not indicative of the player-input color
        position in the secret code.
      </p>

      <Link to="/">Back to Main Menu</Link>
    </Container>
  );
}

const Container = styled.section`
  width: min(100%, 30em);

  & > * {
    margin-bottom: 1em;
    line-height: 1.6;
  }

  h1 {
    text-align: center;
  }

  ul {
    padding-left: 1em;
    list-style: square;
  }

  a {
    margin-top: 2em;
    display: block;
    text-align: center;
  }
`;
