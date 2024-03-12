import { useState,useEffect } from 'react'
import './CardEndereco.css'

// Melhorias nesse componente:
// 1- remover a div fundo e concentrar tudo em um componente "contato"
// 2 - Ajustar margens como o css
// 3? Criar um único dumbComponent para card com imagem e sem

const CardEndereco = ({show}) => {
    const [showCardEndereco,setshowCardEndereco] = useState(false)

    useEffect(() => {
        setshowCardEndereco(show);
    }, [show])


    return (
        showCardEndereco && (<div className='fundo'><div className='cardEndereco'>
            <h2>Endereço</h2>
            <p>Vire na segunda estrela à direita e siga em frente até o amanhecer</p>

        </div></div>)
        
    )
}

export default CardEndereco