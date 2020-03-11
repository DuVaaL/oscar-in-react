import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './css/style.css'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ActorInfo from './Components/ActorInfo';
import ActressInfo from './Components/ActressInfo';
import Films from './Components/Films';
import Footer from './Components/Footer' ;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar title='Oscars 2019' />
          <Route exact path="/" render={() => <Home title="Gagnants des Oscars 2019"/>} /> 
          <Route path="/Actors" render={() => <ActorInfo title = "Meilleurs Acteurs 2019"/> }/>
          <Route path="/Actress" render={() => <ActressInfo title = "Meilleurs Actrices 2019"/>}/>
          <Route path="/Films" render={()=> <Films title="Meileurs Films 2019" />} /> 

          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
