import React from 'react'
import { toCelsius } from '../api';
import sol from '../images/sol.png'

const Climacard = (props) => {
  const {data, dato, prev, datos} = props;

 console.log(prev)
  return (
   
        <div className='card-container container'>
            <img src={sol} alt='sol' className='temp-img'/>
            { !datos ?(
               <div>
               <div className='card-actual'>Clima actual</div>
               <div className='card-temp'>--°c</div>
               <div className='card-wheader'>--</div>
             </div>
            ):(
              !dato ?  (
                <div>
                <div className='card-actual'>Clima actual</div>
                <div className='card-temp'>{toCelsius(prev.current.temp)}°c</div>
                <div className='card-wheader'>{prev.current.weather[0].description}</div>
              </div>
              ):(
                <div>
                <div className='card-actual'>Clima actual</div>
                <div className='card-temp'>{toCelsius(data.main.temp_max)}/{toCelsius(data.main.temp_min)}°c</div>
                <div className='card-wheader'>{data.weather[0].description}</div>
            </div>
              )
            )
              
              
            }
            
        </div>
       
  
  )
}

export default Climacard