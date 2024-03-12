import './Statusbar.css'
import { useState,useEffect } from 'react'

const Statusbar = ({show}) => {
    console.log('Testando Statusbar');
    const [showStatusbar,setshowStatusbar] = useState(false)

    useEffect(() => {
        setshowStatusbar(show);
    }, [show])
    return (
        showStatusbar &&(<div className='statusbar'>
            <p>4:20</p>
            <div className='final'>
            <p>100%</p>
            <img src='./imagens/battery.png'/>
            </div>
        </div>)
        
    )
}

export default Statusbar
