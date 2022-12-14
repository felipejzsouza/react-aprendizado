import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const times = [
    { nome: 'Programação', corPrimaria : '#57c278', corSecundaria: '#e8f8ff' }, 
    { nome: 'Front-End', corPrimaria : '#82cffa', corSecundaria: '#d9f7e9' },
    { nome: 'Data Science', corPrimaria : '#a6d157', corSecundaria: '#f0f8e2' },
    { nome: 'Devops', corPrimaria : '#e06869', corSecundaria: '#fde7e8' },
    { nome: 'UX e Design', corPrimaria : '#db6EBF', corSecundaria: '#fae9f5' },
    { nome: 'Mobile', corPrimaria : '#ffba05', corSecundaria: '#fff5d9' },
    { nome: 'Inovação e Gestão', corPrimaria : '#ff8a29', corSecundaria: '#ffeedf' }
  ]
  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    debugger 
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} cadastrarColaborador={colaborador =>  novoColaborador(colaborador)} />
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador =>  colaborador.time === time.nome)} 
        />)}
        <Rodape />
    </div>
  );
}

export default App;