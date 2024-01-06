import './Legend.css'
import React from 'react'


const Legend = ({title, images}) => {  

  return (   
    <div className='legend'>
        <h3>{title}</h3>
        <div className="images">
            {images.map((image, i)=>(
                <span htmlFor=""  key={i}>
                    <img src={image.image} alt={`${title} ${image.subtitle}`}/>
                    <p>{image.subtitle}</p>
                </span> 
            ))}
        </div>
    </div>
  )
}

export default Legend