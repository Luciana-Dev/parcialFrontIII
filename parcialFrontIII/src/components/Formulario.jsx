import { useState } from "react"
import Card from "./Card"

function Formulario(props){

    const [inputValue, setInputValue] = useState('')

    function handleChange(event){
        const cleanValue = event.target.value.trim()
        console.log(event.target.value, cleanValue)
        setInputValue(cleanValue)
    }
    function handleSubmit(event){
        event.preventDefault()
        if(!inputValue){
            console.error('Por favor chequea que la información sea correcta')
            
        }

        
        console.log('enviando...', inputValue)
        props.onSubmit(inputValue)
    }
    
    return(
        <card>
            <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button type= "submit"> Enviar </button>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button type= "submit"> Enviar </button>

            
        </form>
        </card>
        
        
    )

    
}

export default Formulario