import { useState } from 'react'
import './CampoSelecao.css'

export const CampoSelecao = (props) => {

    const [valor, setValor] = useState('')

    return (
        <div className="campo-selecao">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={evento => {props.alterar(evento.target.value)}}>
                <option key=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}