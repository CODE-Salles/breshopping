import { useState,useEffect } from 'react'
import './CampoContato.css'

// MELHORIAS DESSE COMPONENTE: 
// 1- A imagem ser um link
// 2- O Campo texto ser um link

const CampoContato = ({show,imagem,texto}) => {
    const [showCampoContato,setshowCampoContato] = useState(false)

    useEffect(() => {
        setshowCampoContato(show);
    }, [show])

    return (
        showCampoContato && (
        <div className='campoContato'> 
            <img src={imagem}/>
            <div className='textoContato'>
                <p>{texto}</p>
            </div>

        </div>)
        
    )
}

export default CampoContato