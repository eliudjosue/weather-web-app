import React from 'react'
import { toCelsius } from '../api';
import sol from '../images/sol.png'

const Climacard = (props) => {
  const {main, weather, dato} = props;

  // const toCelsius= (kelvin) => {
  //   return Math.round(kelvin - 273.15);
  // }
  return (
   
        <div className='card-container container'>
            <img src={sol} alt='sol' className='temp-img'/>
            {
              !dato ?  (
                <div>
                <div className='card-actual'>--</div>
                <div className='card-temp'>--/--°c</div>
                <div className='card-wheader'>--</div>
              </div>
              ):(
                <div>
                <div className='card-actual'>Clima actual</div>
                <div className='card-temp'>{toCelsius(main.temp_max)}/{toCelsius(main.temp_min)}°c</div>
                <div className='card-wheader'>{weather.description}</div>
            </div>
              )
              
            }
            
        </div>
       
  
  )
}

export default Climacard