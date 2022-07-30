import { useState } from 'react'
import './CampoTexto.css'

export const CampoTexto = (props) => {
    
    const placeholderModificada = `${props.placeholder}...`

    //let nome = 'Felipe Jezus'

    const [valor, setValor] = useState('')

    const digitar = (evento) => {        
        props.alterar(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{ props.label }</label>
            <input value={props.valor} onChange={digitar} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}