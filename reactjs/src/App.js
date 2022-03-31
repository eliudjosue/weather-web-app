import React from 'react';
import Location from './components/Location';
import './App.css';
import Climacard from './components/Climacard';
import Prevision from './components/Prevision';
import Dias from './components/Dias';
import Search from './components/Search';
import { fetchData } from './api';


function App() {
  // const [dias, setDias] = React.useState('');
  const [main, setMain] = React.useState([])
  const [data, setData] = React.useState([]);
  const [weather, setWeather] = React.useState([]);

  const getData = async(query) =>{
    try {
      const result = await fetchData(query)
      setMain(result.main);
      setData(result);
      setWeather(result.weather[0]);
    } catch (error) {
      
    }
  }

  return (
    <div className="container">
      <Search getData={getData}/>
     <Location data={data}/>
     <Climacard main={main}
                weather={weather}/>
     <Prevision data={data}/>
     <Dias dias={'Lunes'}
           data={data}/>
     <Dias dias={'Martes'}
           data={data}/>
     <Dias dias={'Miercoles'}
           data={data}/>
     <Dias dias={'Jueves'}
           data={data}/>
     <Dias dias={'Viernes'}
           data={data}/>
     <Dias dias={'Sabado'}
           data={data}/>
     <Dias dias={'Domingo'}
           data={data}/>
    </div>
  );
}

export default App;
