import React from 'react'
import location from '../images/location-star.png'

const Location = (props) => {
  const {data} = props;
  console.log(props)

  const fecha = new Date();
  console.log(fecha)
  return (
    <div className='location'>
        <div className='location-city'>
          <img src={location} alt='location'/>
          {/* <div>{data.name} | {data.sys.country}</div>  */}
        </div>
        <div className='location-day'> Dia: {fecha.getDay()}/{fecha.getMonth()}/{fecha.getUTCFullYear()} | Hora actual: 16:57</div>
    </div>
  )
}

export default Location