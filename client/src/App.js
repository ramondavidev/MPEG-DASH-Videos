import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage-component';
import VideoPage from './pages/videosPage/videopage.component';
import Redacao from './pages/redacao/redacao.component';
import Matematica from './pages/matematica/matematica.component';
import Portugues from './pages/portugues/portugues.component';
import CienciaNatureza from './pages/ciencias/ciencias.component';
import CienciasHumanas from './pages/ciencias-humanas/ciencias-humanas.component';

import Header from './components/header/header.component';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/videos' component={VideoPage} />
        <Route exact path='/redacao' component={Redacao} />
        <Route exact path='/matematica' component={Matematica} />
        <Route exact path='/portugues' component={Portugues} />
        <Route exact path='/ciencias-da-natureza' component={CienciaNatureza} />
        <Route exact path='/ciencias-humanas' component={CienciasHumanas} />


      </Switch>
    </div>
  );
}

export default App;
