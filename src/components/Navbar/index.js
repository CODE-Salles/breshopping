import { useState,useEffect } from 'react'
import Botao from '../Botao'
import './Navbar.css'

const Navbar = ({show}) => {
    const [showNavbar,setshowNavbar] = useState(false)

    useEffect(() => {
        setshowNavbar(show);
    }, [show])

    const estilobotao = {
        backgroundColor: '#fff',
        color: '#1B3D86',
    }
    return (
        showNavbar && (<div className='navbar'>
            <img src='./imagens/blacklogo.png'/>
            <Botao texto="Gerenciar" estilo={estilobotao} ></Botao>

        </div>)
        
    )
}

export default Navbar