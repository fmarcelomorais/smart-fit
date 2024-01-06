import Form from '../Form/Form'
import Legend from '../Legend/Legend'
import './Main.css'
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
import Unit from '../Uniti/Unit'


const Main = () => {

  const [units, setUnits] = React.useState(null)

  const imagesMask = [{"image":required_mask, "subtitle":"Obrigatorio"},{"image":recommended_mask, "subtitle":"Recomendado"}]
  const imagesTowel = [{"image":required_towel, "subtitle":"Obrigatorio"},{"image":recommended_towel, "subtitle":"Recomendado"}]
  const imagesFountain = [{"image":forbidden_fountain, "subtitle":"Proibido"},{"image":partial_fountain, "subtitle":"Parcial"}]
  const imagesLockerroom = [{"image":required_lockerroom, "subtitle":"Obrigatório"},{"image":forbidden_lockerroom, "subtitle":"Proibido"},{"image":partial_lockerroom, "subtitle":"Parcial"}]

  return (
    <main className='container'>
        <section className='section-1'>
          <h2>REABERTURA</h2>
          <h2>SMART FIT</h2>
          <div className="barra"></div>  
          <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>        
        </section>
        <section className='section-2'>
          <Form set={setUnits}/>  
        </section>
        <section className='section-3'>
            <Legend title="Mascaras" images={imagesMask}/>
            <Legend title="Toalhas" images={imagesTowel}/>
            <Legend title="Bebedouros" images={imagesFountain}/>
            <Legend title="Vestiarios" images={imagesLockerroom}/>
        </section>
        <section className='section-4'>
          {units === null ? null : <Unit units={units}/>}
        </section>
    </main>
  )
}

export default Main