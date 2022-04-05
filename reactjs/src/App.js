import React from 'react';
import Location from './components/Location';
import './App.css';
import Climacard from './components/Climacard';
import Prevision from './components/Prevision';
import Dias from './components/Dias';
import Search from './components/Search';
import { fetchData, fetchData2 } from './api';


function App() {
  // const [dias, setDias] = React.useState('');
  const [main, setMain] = React.useState([])
  const [data, setData] = React.useState([]);
  const [weather, setWeather] = React.useState([]);
  const [dato, setDato] = React.useState(false);
  const [lat, setLat] = React.useState(Number);
  const [lon, setLon] = React.useState(Number);

  const [prevs, setPrev] = React.useState([]);



  const getData = async(query) =>{
    try {
      setDato(true);
      const result = await fetchData(query)
      setMain(result.main);
      setData(result);
      setWeather(result.weather[0]);
      setLon(data.coord.lon);
      setLat(data.coord.lat);
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  }

 

  const getData2 = async(lat, lon) =>{
      try {
        const result = await fetchData2(lat, lon)
        setPrev(result.daily);
      } catch (error) {
        console.log(error)
      }
    }

  
            

  return (
    <div className="container">
      <Search getData={getData}
              getData2={getData2}
              lon={lon}
              lat={lat}/>
     <Location data={data}
               dato={dato}/>
     <Climacard main={main}
                weather={weather}
                dato={dato}/>
     <Prevision data={data}/>



     <Dias prev={prevs}/>
    </div>
  );
}

export default App;
