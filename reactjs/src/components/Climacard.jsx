import React from 'react'
import sol from '../images/sol.png'

const Climacard = () => {
  return (
   
        <div className='card-container container'>
            <img src={sol} alt='sol' className='temp-img'/>
            <div>
                <div className='card-actual'>Clima actual</div>
                <div className='card-temp'>23/18°c</div>
                <div className='card-wheader'>Soleado</div>
            </div>
        </div>
       
  
  )
}

export default Climacard