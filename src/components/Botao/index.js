import './Botao.css'

const Botao = (props) => {
    console.log(Botao)
    return(
        <div className='botao' style={props.estilo}>
            <p>{props.texto}</p>
        </div>

    )


}

export default Botao