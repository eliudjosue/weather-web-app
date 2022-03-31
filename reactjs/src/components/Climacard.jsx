import React from 'react'
import sol from '../images/sol.png'

const Climacard = (props) => {
  const {main, weather} = props;

  const toCelsius= (kelvin) => {
    return Math.round(kelvin - 273.15);
  }
  return (
   
        <div className='card-container container'>
            <img src={sol} alt='sol' className='temp-img'/>
            <div>
                <div className='card-actual'>Clima actual</div>
                <div className='card-temp'>{toCelsius(main.temp_max)}/{toCelsius(main.temp_min)}°c</div>
                <div className='card-wheader'>{weather.description}</div>
            </div>
        </div>
       
  
  )
}

export default Climacard