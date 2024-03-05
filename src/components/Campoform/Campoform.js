import './Campoform.css'

const Campoform = (props) => {
    console.log(Campoform)
    return(
        <div className="campoform">
            <label>
                {props.label}
            </label>
            <input value={props.valor} required={props.obrigatorio}  />
        </div>
    )
}

export default Campoform