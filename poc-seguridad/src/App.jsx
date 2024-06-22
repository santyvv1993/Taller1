import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import faker from 'faker'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Santiago');
  const generarNombre = () => {
    const nombre = faker.name.findName();
    setName(nombre);
  };
  

  const [output, setOutput] = useState('')

  const enviarAGuardar = ()=>{
    console.log('va a guardar', name)
    setOutput(name);
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      


      <h3>{name}</h3>
      <button onClick={generarNombre}>Aleatorio</button>
      <label htmlFor="">Nombre: </label>
      <input type="text" value={name} onChange={(event)=> setName(event.target.value)} />


      <button onClick={enviarAGuardar}>Enviar</button>

    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>



      <h1>Se Envia al Backend esto:</h1>


      <div dangerouslySetInnerHTML={{__html: output}}></div>

    </>
  )
}

export default App
