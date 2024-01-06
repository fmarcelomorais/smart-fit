//import Legend from '../Legend/Legend'
import { statusUnit, clearString } from '../../services/functions'
import LegendUnit from '../Legend/LegendUnit'
import './Unit.css'
import React from 'react'

import required_mask from '../../images/required-mask.png'
import recommended_mask from '../../images/recommended-mask.png'
import required_towel from '../../images/required-towel.png'
import recommended_towel from '../../images/recommended-towel.png'
import forbidden_fountain from '../../images/forbidden-fountain.png'
import partial_fountain from '../../images/partial-fountain.png'
import partial_lockerroom from '../../images/partial-lockerroom.png'
import forbidden_lockerroom from '../../images/forbidden-lockerroom.png'
import required_lockerroom from '../../images/required-lockerroom.png'

const Unit = (units) => {

  const [data, setData] = React.useState()
  const imagesMask = [{"image":required_mask, "subtitle":"Obrigatorio", "value":"required"},{"image":recommended_mask, "subtitle":"Recomendado", "value":"recommended"}]
  const imagesTowel = [{"image":required_towel, "subtitle":"Obrigatorio", "value":"required" },{"image":recommended_towel, "subtitle":"Recomendado", "value":"recommended"}]
  const imagesFountain = [{"image":forbidden_fountain, "subtitle":"Proibido", "value":"forbidden" },{"image":partial_fountain, "subtitle":"Parcial", "value":"partial"}]
  const imagesLockerroom = [{"image":required_lockerroom, "subtitle":"Obrigatório", "value":"required"},{"image":forbidden_lockerroom, "subtitle":"Proibido", "value":"forbidden" },{"image":partial_lockerroom, "subtitle":"Parcial", "value":"partial"}]

  React.useEffect(()=>{
    async function resolve(){ 
      const a = await units
      setData(a.units)
    }
  
    resolve()
  }, [units])

  return (
   <>
    {data == null ? <p>Aguarde...</p> : data.map((d, i) => (
      <div className='unit' key={i}>  
          <p className={statusUnit(d.opened)}>{statusUnit(d.opened)}</p>
          <h3>{d.title}</h3>
          <span>{clearString(d.content)}</span>
          <hr />
          <div className="legendUnit">
              <LegendUnit images={imagesMask.filter(img => img.value === d.mask)}/>
              <LegendUnit images={imagesTowel.filter(img => img.value === d.towel)}/>
              <LegendUnit images={imagesFountain.filter(img => img.value === d.fountain)}/>
              <LegendUnit images={imagesLockerroom.filter(img => img.value === d.locker_room)}/>
          </div>
          <div className="schedules">
            {d.schedules && d.schedules.map((sch, i) => (
              <span key={i}>
                <p><strong>{sch.weekdays}</strong></p>
                <p>{sch.hour}</p>
              </span>
            ))}
          </div>
      </div>  
    ))}    
   
   </>
   
  )
}

export default Unit