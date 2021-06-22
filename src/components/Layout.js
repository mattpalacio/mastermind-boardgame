import styled from 'styled-components';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
`;

const Main = styled.main`
  height: 100%;
  padding: 1em 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
