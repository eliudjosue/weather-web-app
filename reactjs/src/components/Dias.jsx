import React from 'react'
import frame from '../images/Frame.png'

const Dias = (props) => {
    const prev = props;
    console.log(prev)
  return (
    <div className='dias-container'>
      {/* <div>
        {prev.map((daily)=>{
          return(
            <div>
               <img src={frame} alt='frame' className='dias-frame'/>
                <div  className='dias'>
                  <div></div>
                    <div className='dias-temp'> | 24/15 °C</div> 
                </div>
            </div>
          )
        })
        }
      </div> */}
       
        
    </div>
  )
}

export default Dias