import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Pedidos from './components/Pedido'

const pedidos =[
  {id: 1, name: "vaca"},
  {id: 2, name: "perro"},
  {id: 3, name: "loro"},
  {id: 4, name: "gato"}

]

function App() {
  const [pedidos, setPedidos] = useState([])

  function handleAddPedido(pedido){
    const newPedidos = [...pedidos]
    newPedidos.push({
      id: newPedidos.length + 1,
      name: pedido,
    })
    console.log(newPedidos)
    setPedidos(newPedidos)
  }
  console.log(pedidos)
  
  return (
    <div className="App">
      <Header title="Elige tu animal preferido"/>
      <Formulario onSubmit = {handleAddPedido}/>
      <hr/>
      <hr/>
      {pedidos.map((pedido) => {
        return <Pedidos Key= {pedido.id} pedido={pedido}/>

      })}
    </div>
  )
}

export default App
