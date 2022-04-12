import React from 'react'
import location from '../images/location-star.png'
import moment from 'moment';

const Location = (props) => {
  const {data, dato, datos, prev} = props;
  
  const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${( '0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`
}

const d = new Date()
  return (
    <div className='location'>
      { !datos ? (
         <div>
         <div className='location-city'>
           <img src={location} alt='location'/>
           <div> -- | -- </div> 
         </div>
         <div className='location-day'> Dia: {getDate()} | Hora actual: {d.getHours()}:{d.getMinutes()}:{d.getSeconds()}</div>
       </div>
      ):(
        dato ?(
          <div>
          <div className='location-city'>
            <img src={location} alt='location'/>
            <div>{data.name} | {data.sys.country} </div> 
          </div>
          <div className='location-day'> Dia: {getDate()} | Hora actual: {moment(data.dt*1000).format('LTS')}</div>
      </div>
      ):(
        <div>
          <div className='location-city'>
            <img src={location} alt='location'/>
            <div> {prev.timezone} </div> 
          </div>
          <div className='location-day'> Dia: {getDate()} | Hora actual: {d.getHours()}:{d.getMinutes()}:{d.getSeconds()}</div>
        </div>
      )
      )
       
      }
    </div>
  )
}

export default Location