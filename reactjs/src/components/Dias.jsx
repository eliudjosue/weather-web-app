import React from 'react'
import { toCelsius } from '../api';
import frame from '../images/Frame.png'


const Dias = (props) => {
  // const [dia, setDia] = React.useState('');
    const prevs = props;

  return (
    <div>
      <div>
        { prevs.prev.map( (prev,idx) => {
          
          const DIAS_SEMANA =[
            'Domingo',
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sabado',
            'Domingo'
          ]

          const dia = DIAS_SEMANA[idx]
         
          return(
            
            <div key={idx}  className='dias-container'>
               <img src={frame} alt='frame' className='dias-frame'/>
                <div  className='dias'>
                  <div className='dias'>{dia }</div>
                    <div className='dias-temp'> | { toCelsius(prev.temp.max)} / {toCelsius(prev.temp.min)} °C</div> 
                </div>
            </div>
          )
        })
        }
      </div>
       
        
    </div>
  )
}

export default Dias