import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Content} from './components/Content';
import {Footer} from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </div>
  );
};

export default App;
