import React from 'react'
import location from '../images/location-star.png'

const Location = () => {
  return (
    <div className='location'>
        <div className='location-city'>
          <img src={location} alt='location'/>
          <div>Yaguaraparo, Sucre | Vzla</div> 
        </div>
        <div className='location-day'> Dia: 30/3/3022 | Hora actual: 16:57</div>
    </div>
  )
}

export default Location