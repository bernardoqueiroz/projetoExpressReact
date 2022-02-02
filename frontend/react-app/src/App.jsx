import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Boxes from './Boxes';
import Resposta from './Resposta'

function App() {
 
  return (
    <Router>
      <Route path="/" exact render={()=>(
        <Boxes></Boxes>
      )}/>

      <Route path="/resposta" exact render={() => (
        <Resposta></Resposta>
      )}/>
    </Router>
  );
}
 
export default App;
