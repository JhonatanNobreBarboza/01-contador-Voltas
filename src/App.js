import React, {useState, useEffect} from 'react'

const MostraVoltas = (props) => {
  return (
    <p>
      {props.voltas} <br />
      Voltas
     </p>
  )
}

const MostraTempo = (props) => {
  return (
    <p>{props.tempo}<br />
      Tempo médio por volta
    </p>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

function App() {
  const [numVoltas, setNumVoltas] = useState(14)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    setInterval(() => {
      console.log('chamou!')
    }, 1000)
  }, [])
  


  const inclement = () => {
    setNumVoltas(numVoltas + 1)
  }

  const declement = () => {
    setNumVoltas(numVoltas - 1)
  }
  return (
    <div>
      <MostraVoltas voltas={numVoltas} />
      <Button text='+' onClick={inclement} />
      <Button text='-' onClick={declement} />
      <MostraTempo tempo={tempo} />
      <Button text='Iniciar' />
      <Button text='Reiniciar' />
    </div>
  )
}

export default App
