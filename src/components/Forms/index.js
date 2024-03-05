import './Forms.css'
import Botao from '../Botao'
import Campoform from '../Campoform/Campoform'
const Forms = (props) => {
    const estilobotao = {
        backgroundColor : props.backgroundColor,
        color : props.color,
    }

    return(
        <section className='forms'>
            

            <form >
            <div className='header'>
                    <h1>Login</h1>
                </div>
            
            <Campoform label="Email"/>

            <Campoform label="Senha"/>
                
                <Botao texto="Enviar" estilo={estilobotao}/>
            </form>
        </section>
    )


}

export default Forms