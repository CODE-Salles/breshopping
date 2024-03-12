import { useState,useEffect } from 'react'
import './Title.css'

const Title = ({show,texto, fontSize, color }) => {
    const [showTitle,setshowTitle] = useState(false)

    useEffect(() => {
        setshowTitle(show);
    }, [show])

    return (
        showTitle && (<div style={{fontSize: fontSize, color:color}} >
            <h1>{texto}</h1>

       </div>)
        
    )
}

export default Title