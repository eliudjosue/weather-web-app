import React from 'react'
import calendar from '../images/calendar.png'

const Prevision = () => {
  return (
    <div className='prevision-container'>
        <img src={calendar} alt='prevision'/>
        <div className='prevision-text'>Prevision semanal</div>
    </div>
  )
}

export default Prevision