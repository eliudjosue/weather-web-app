import React from 'react';
import Location from './components/Location';
import './App.css';
import Climacard from './components/Climacard';
import Prevision from './components/Prevision';
import Dias from './components/Dias';

function App() {
  // const [dias, setDias] = React.useState('')
  return (
    <div className="container">
     <Location/>
     <Climacard/>
     <Prevision/>
     <Dias dias={'Lunes'}/>
     <Dias dias={'Martes'}/>
     <Dias dias={'Miercoles'}/>
     <Dias dias={'Jueves'}/>
     <Dias dias={'Viernes'}/>
     <Dias dias={'Sabado'}/>
     <Dias dias={'Domingo'}/>
    </div>
  );
}

export default App;
