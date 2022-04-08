import React from 'react'
import { toCelsius } from '../api';
import frame from '../images/Frame.png'
import moment from 'moment';


const Dias = (props) => {

    const prevs = props;

 

  return (
    <div>

      <div>
        { prevs.prev.map( (prev,idx) => {

          return(
            
            <div>
                <div key={idx}  className='dias-container'>
                <img src={frame} alt='frame' className='dias-frame'/>
                  <div  className='dias'>
                    <div className='dias'>{moment(prev.dt*1000).format('ddd') }</div>
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




