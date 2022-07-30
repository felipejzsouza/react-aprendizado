import CampoSelecao from "../CampoSelecao";
import CampoTexto from "../CampoTexto";
import Botao from "../botao";
import './Formulario.css'
import { useState } from "react";

const Formulario = (props) => {    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const salvar = (evento) => {
        debugger
        evento.preventDefault()
        props.cadastrarColaborador({
            nome, 
            cargo,
            imagem, 
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>            
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome} 
                    alterar={valor => setNome(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo} 
                    alterar={valor => setCargo(valor)} 
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite endereço da imagem" 
                    valor={imagem} 
                    alterar={valor => setImagem(valor)} 
                />
                <CampoSelecao 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times} 
                    valor={time} 
                    alterar={valor => setTime(valor)} 
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;