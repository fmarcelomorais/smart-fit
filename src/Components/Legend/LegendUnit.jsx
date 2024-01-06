import './Legend.css'
import React from 'react'


const LegendUnit = ({images}) => {   

  return (   
    <div className='legend'>
        <div className="images">
            {images.map((image, i)=>(
                <span htmlFor=""  key={i}>
                    <img src={image.image} alt={`${image.subtitle}`}/>
                    <p>{image.subtitle}</p>
                </span> 
            ))}
        </div>
    </div>
  )
}

export default LegendUnit

