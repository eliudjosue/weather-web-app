import React from 'react'
import { toCelsius } from '../api';
import animated from '../images/animated';
import sol from '../images/sol.png'


const Climacard = (props) => {
  const {data, dato, prev, datos} = props;

 let dia
 if (datos) {
 
  switch (prev.current.weather[0].main || data.weather[0].main){
  case 'Clear':
    dia = (animated.clear)
    break;

    case 'Clouds':
     dia = (animated.cloud)
     break;

     case 'Rain':
       dia = (animated.rain)
       break;

       case 'Thunderstorm':
       dia = (animated.thunderstorm)
       break;

  default:
    break;
}
 }
 
  return (
   
        <div>
            
            { !datos ?(
               <div className='card-container container'>
                <img src={sol} alt='sol' className='temp-img'/>
                <div>
                   <div className='card-actual'>Clima actual</div>
                   <div className='card-temp'>--°c</div>
                   <div className='card-wheader'>--</div>
                </div>
              
             </div>
            ):(
              !dato ?  (
                <div className='card-container container'>
                <img src={dia} alt='sol' className='temp-img'/>
                <div>
                  <div className='card-actual'>Clima actual</div>
                  <div className='card-temp'>{toCelsius(prev.current.temp)}°c</div>
                  <div className='card-wheader'>{prev.current.weather[0].description}</div>
                </div>
                
              </div>
              ):(
                <div className='card-container container'>
                <img src={dia} alt='sol' className='temp-img'/>
                <div>
                   <div className='card-actual'>Clima actual</div>
                   <div className='card-temp'>{toCelsius(data.main.temp_max)}/{toCelsius(data.main.temp_min)}°c</div>
                   <div className='card-wheader'>{data.weather[0].description}</div>
                </div>
               
            </div>
              )
            )
              
              
            }
            
        </div>
       
  
  )
}

export default Climacard