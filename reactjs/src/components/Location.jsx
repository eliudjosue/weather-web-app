import React from 'react'
import location from '../images/location-star.png'

const Location = (props) => {
  const {data, dato} = props;
  
  const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${( '0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`
}
  return (
    <div className='location'>
      {
        !dato ?(
          <div>
            <div className='location-city'>
              <img src={location} alt='location'/>
              <div> -- | -- </div> 
            </div>
            <div className='location-day'> Dia: {getDate()} | Hora actual: 16:57</div>
          </div>
        ):(
          <div>
            <div className='location-city'>
              <img src={location} alt='location'/>
              <div>{data.name} | xxxxxx</div> 
            </div>
            <div className='location-day'> Dia: {getDate()} | Hora actual: 16:57</div>
        </div>
        )
      }
    </div>
  )
}

export default Location