import { useState, useEffect } from 'react'
import './CardImagem.css'

// Melhorias nesse componente:
// 1- remover a div fundo e concentrar tudo em um componente "contato"
// 2 - Ajustar margens como o figma
// 3? Criar um único dumbComponent para card com imagem e sem

const CardImagem = ({ show, texto}) => {
    const [showCardImagem, setshowCardImagem] = useState(false)

    useEffect(() => {
        setshowCardImagem(show);
    }, [show])


    return (
        showCardImagem && (<div className='fundo'>
            <div className='cardImagem'>
                <p>{texto}</p>
                <img src='./imagens/blacklogo.png'/>



            </div></div>)

    )
}

export default CardImagem