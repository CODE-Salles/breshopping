import './Forms.css'
import Botao from '../Botao'
import Campoform from '../Campoform/Campoform'
import { useState,useEffect } from 'react'

const Forms = (props) => {
    const estilobotao = {
        backgroundColor : props.backgroundColor,
        color : props.color,
    }
    const [showForms,setshowForms] = useState(false)

    useEffect(() => {
        setshowForms(props.show);
    }, [props.show])

    return(
        showForms &&(<section className='forms'>
            

             <form >
            <div className='header'>
                    <h1>Login</h1>
                </div>
            
            <Campoform label="Email"/>

            <Campoform label="Senha"/>
                
                <Botao texto="Enviar" estilo={estilobotao}/>
            </form>
        </section>)
    )


}

export default Forms