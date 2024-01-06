import './Form.css'
import clock from '../../images/icon-hour.png'
import React from 'react'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Button from './Button'
import { search } from '../../services/service'

const Form = ({set}) => {

    const [selected, setSelected] = React.useState('');
    const [showUnitClosed, setShowUnitClosed] = React.useState(false);
    
    const handleClick = (event) => {
        event.preventDefault()       
        search(set, {showUnitClosed, selected})
    }
    const handleClickClear = (event) => {
        event.preventDefault()       
        set(null)
    }

  return (
    <div className="search">
        <p>
            <img src={clock} alt="clock" />
            <span>Horário</span>
        </p>
        <p>Qual periodo quer treinar?</p>
        <hr />
        <form className='form'>
            <Radio options={
                [
                    {"weekdays":"Manhã", "hour":"06:00 às 12:00"},
                    {"weekdays":"Tarde", "hour":"12:01 às 18:00"},
                    {"weekdays":"Noite", "hour":"18:01 às 23:00"},
                ]} 
                name="horario" 
                set={setSelected} 
            />
            <br />
            <Checkbox label="Exibir unidades fechadas" id="showUnit" value={showUnitClosed} set={setShowUnitClosed}/>
            <br />
            <div className="button">                
                <Button value="Buscar" classe="warning fw-bold" set={handleClick}/>
                <Button value="Limpar" classe=" bg-body-secondary fw-bold" set={handleClickClear}/>
            </div>
        </form>
    </div>
  )
}

export default Form