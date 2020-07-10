import React from 'react';
import './styles/styles.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { PokemonDetails } from './pages/PokemonDetails/PokemonDetails';
import { ROUTE } from './routes/routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <main className={'main'}>
        <Header />
        <Router>
          <Route exact path={ROUTE.Home} component={Home} />
          <Route exact path={ROUTE.PokemonDetails} component={PokemonDetails} />
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default App;
