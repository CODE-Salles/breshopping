import { useState,useEffect } from 'react'
import './CardTxt.css'

// Melhorias nesse componente:
// 1- remover a div fundo e concentrar tudo em um componente "contato"
// 2 - Ajustar margens como o figma
// 3? Criar um único dumbComponent para card com imagem e sem

const CardTxt = ({show,texto}) => {
    const [showCardTxt,setshowCardTxt] = useState(false)

    useEffect(() => {
        setshowCardTxt(show);
    }, [show])


    return (
        showCardTxt && (<div className='fundo'><div className='cardTxt'>
            <p>{texto}</p>

        </div></div>)
        
    )
}

export default CardTxt