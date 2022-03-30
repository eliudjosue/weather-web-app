import React from 'react'
import frame from '../images/Frame.png'

const Dias = (props) => {
    const dias = props.dias;
  return (
    <div className='dias-container'>
        <img src={frame} alt='frame' className='dias-frame'/>
        <div  className='dias'>
           <div>{dias}</div>
            <div className='dias-temp'> | 24/15 °C</div> 
        </div>
        
    </div>
  )
}

export default Dias