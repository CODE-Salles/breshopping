import Botao from '../Botao'
import './Navbar.css'

const Navbar = () => {

    const estilobotao = {
        backgroundColor: '#fff',
        color: '#1B3D86',
    }
    return (
        <div className='navbar'>
            <img src='./imagens/blacklogo.png'/>
            <Botao texto="Gerenciar" estilo={estilobotao} ></Botao>

        </div>
        
    )
}

export default Navbar