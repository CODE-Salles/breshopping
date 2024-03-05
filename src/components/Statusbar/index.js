import './Statusbar.css'

const Statusbar = () => {
    console.log('Testando Statusbar');
    return (
        <div className='statusbar'>
            <p>4:20</p>
            <div className='final'>
            <p>100%</p>
            <img src='./imagens/battery.png'/>
            </div>
        </div>
        
    )
}

export default Statusbar
