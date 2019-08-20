import React from 'react'

const MostraVoltas = (props) => {
  return(
    <p>
      {props.voltas} <br/>
      Voltas
     </p>
  )
}

const MostraTempo = (props) => {
  return(
    <p>{props.tempo}<br/>
     Tempo médio por volta     
    </p>
  )
}

function App() {
  return (
    <div className='App'>
     <MostraVoltas voltas={12}/>
     <button>+</button><button>-</button><br/>
     <MostraTempo tempo={'01:30'}/>
     <button>Iniciar</button><button>Reiniciar</button>
    </div>
  )
}

export default App
