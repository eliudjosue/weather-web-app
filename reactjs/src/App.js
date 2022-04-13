import React from 'react';
import Location from './components/Location';
import './App.css';
import Climacard from './components/Climacard';
import Prevision from './components/Prevision';
import Dias from './components/Dias';
import Search from './components/Search';
import { fetchData, fetchData2 } from './api';


function App() {
  const [data, setData] = React.useState([]);
  const [dato, setDato] = React.useState(false);
  const [datos, setDatos] = React.useState(false);
  const [prevs, setPrevs] = React.useState([]);
  const [prev, setPrev] = React.useState([]);


  const getData = async(query) =>{
    let lon
    let lat
    try {
      const result = await fetchData(query)
      setData(result);
      setDato(true);
      console.log(result);
      lon = (data.coord.lon);
      lat = (data.coord.lat);
    } catch (error) {
      console.log(error)
    }

    if (lon && lat) {
      getData2(lat, lon)
    }
  }

  const getData2 = async(lat, lon) =>{
    try {
      const result = await fetchData2(lat, lon)
      setPrevs(result.daily);
      setPrev(result);
      setDatos(true);
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }


 
   
    React.useEffect(()=>{
      let lon
      let lat
  window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( posicion => {
          lon = (posicion.coords.longitude) 
          lat = (posicion.coords.latitude) 
            console.log(posicion);
            getData2(lat, lon)
        })
    }
   })
 
      
    },[])
 

 
          
  return (
    <div className="container">
      <Search getData={getData}
              getData2={getData2}/>
     <Location data={data}
               dato={dato}
               datos={datos}
               prev={prev}/>
     <Climacard data={data}
                dato={dato}
                datos={datos}
                prev={prev}/>
     <Prevision data={data}
                dato={dato}
                prev={prev}/>



     <Dias prev={prevs}/>
    </div>
  );
}

export default App;
