import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import GameboardPage from './pages/Gameboard';
import IndexPage from './pages/Index';
import RulesPage from './pages/Rules';
import { GameContext } from './providers/gameProvider';

export default function App() {
  const { hasGameStarted } = useContext(GameContext);

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/gameboard">
          {hasGameStarted ? <GameboardPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/rules" component={RulesPage} />
      </Switch>
    </Layout>
  );
}
