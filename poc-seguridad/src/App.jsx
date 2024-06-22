import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import faker from 'faker'
import DOMpurify from 'dompurify'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Santiago');
  const generarNombre = () => {
    const nombre = faker.name.findName();
    setName(nombre);
  };
  

  const [output, setOutput] = useState('')

  const enviarAGuardar = () => {
    // Validación de entrada: Asegurarse de que 'name' cumple con un patrón específico.
    // Por ejemplo, solo letras y espacios. Esto es opcional y depende de tus requisitos.
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      console.error('El nombre contiene caracteres no permitidos.');
      return;
    }
  
    // Configuración de DOMPurify para personalizar la sanitización.
    // Por ejemplo, permitir ciertos elementos o atributos si es necesario.
    const cleanConfig = {
      ALLOWED_TAGS: ['b', 'i'], // Solo permite elementos en negrita e itálica, como ejemplo.
      // Agrega más configuraciones según sea necesario.
    };
  
    const sanitizedOutput = DOMPurify.sanitize(name, cleanConfig);
    setOutput(sanitizedOutput);
  };


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
      <label htmlFor="nombreInput">Nombre: </label>
      <input id="nombreInput" type="text" value={name} onChange={(event)=> setName(event.target.value)} />


      <button onClick={enviarAGuardar}>Enviar</button>

    
      <div className="card">
        <button name='Contador' onClick={() => setCount((count) => count + 1)}>
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


      <div id="output" dangerouslySetInnerHTML={{__html: output}} data-testid="output"></div>
    </>
  )
}

export default App
