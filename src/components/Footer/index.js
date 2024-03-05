import './Footer.css'
import Botao from '../Botao'

const Footer = () => {
    console.log(Footer)
    const estilobotao = {
        backgroundColor: '#fff',
        color: '#1B3D86',
    }
    return( 
            <div className='footer'>
                <div className='coluna1'>
                <Botao texto="Home" estilo={estilobotao}> </Botao>
                <Botao texto="Contato" estilo={estilobotao}> </Botao>

                </div>
                <div className='coluna2'>
                <Botao texto="Login" estilo={estilobotao}> </Botao>
                <Botao texto="Membros" estilo={estilobotao}> </Botao>

                </div>



            </div>
           )


}

export default Footer