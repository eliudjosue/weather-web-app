import React from 'react'
import { toCelsius } from '../api';
import animated from '../images/animated'
import moment from 'moment';


const Dias = (props) => {

    const prevs = props;
  
 
  
 

  return (
    <div>

      <div>
        { prevs.prev.map( (prev,idx) => {
          let dia
    
         switch (prev.weather[0].main) {
           case 'Clear':
             dia=animated.clear
             break;

             case 'Clouds':
              dia=animated.cloud
              break;

              case 'Rain':
                dia=animated.rain
                break;

                case 'Thunderstorm':
                dia=animated.thunderstorm
                break;
         
           default:
             break;
         }
        
          return(
            
            <div>
                <div key={idx}  className='dias-container'>
                <img src={dia} alt='frame' className='dias-frame'/>
                  <div  className='dias'>
                    <div className='dias'>{moment(prev.dt*1000).format('dddd') }</div>
                      <div className='dias-temp'> | { toCelsius(prev.temp.max)} / {toCelsius(prev.temp.min)} °C</div> 
                  </div>
                </div>
              
            </div>
          )
             
            
              
          

        })}
      </div>
       
    </div>
  )
}

export default Dias




