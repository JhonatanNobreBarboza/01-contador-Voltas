import React, { useState, useEffect } from 'react'
import './style.css'
import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'


function App() {
  const [numVoltas, setNumVoltas] = useState(1)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null
    if (running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running])


  const toggleRunning = () => {
    setRunning(!running)
  }

  const inclement = () => {
    setNumVoltas(numVoltas + 1)
  }

  const declement = () => {
    if(numVoltas > 0){
    setNumVoltas(numVoltas - 1)
    }
  }
  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }
  return (
    <div>
      <p className='titulo'>Contador de Voltas</p>
      <MostraVoltas voltas={numVoltas} />
      <Button text='+' className='bigger' onClick={inclement} />
      <Button text='-' className='bigger' onClick={declement} />
      {
        numVoltas > 0 &&
      <MostraTempo tempo={Math.round(tempo/numVoltas)} />
      }
      <Button onClick={toggleRunning} text={running ? 'Pausar' : 'Iniciar'} />
      <Button onClick={reset} text='Reiniciar' />
    </div>
  )
}

export default App
