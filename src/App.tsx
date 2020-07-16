import React from 'react';
import './styles/styles.scss';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {PokemonDetails} from './pages/PokemonDetails/PokemonDetails';
import {ROUTE} from './routes/routes';
import {ConstructionPage} from './pages/ConstructionPage/ConstructionPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <main className={'main'}>
                    <Header/>
                    <Switch>
                        <Route exact path={ROUTE.Home} component={Home}/>
                        <Route exact path={ROUTE.PokemonDetails} component={PokemonDetails}/>
                        <Route exact path={ROUTE.ConstructionPage} component={ConstructionPage}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
