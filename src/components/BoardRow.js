import styled from 'styled-components';

export default function BoardRow({ guess }) {
  return (
    <Wrapper>
      <div>
        <Slots>
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              style={
                guess && {
                  backgroundColor: guess.code[i]
                    ? guess.code[i].hex
                    : 'transparent',
                  border: guess.code !== null && 'none',
                }
              }></div>
          ))}
        </Slots>

        <Hints>
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              style={
                guess && {
                  backgroundColor:
                    guess.hints.length !== 0 ? guess.hints[i] : 'transparent',
                  border: guess.hints[i] && '2px solid #000',
                }
              }></div>
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

  &:not(:last-of-type) {
    margin-bottom: 2em;
  }

  &:not(:last-of-type)::after {
    content: '';
    grid-column: 1 / -1;
    width: 95%;
    height: 1em;
    margin: 0 auto;
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
    border: 2px dashed var(--darkGray);
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
    border: 2px dashed var(--darkGray);
    border-radius: 50%;
  }
`;
