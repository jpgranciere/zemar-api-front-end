import './estilo.css'
import logo from '../../imagens/logo-zemar.svg'

function BarraLateral(){
    return (
        <div className='header'>
            <img src={logo} alt="Logo Zemar" />
        </div>
    )
}

export default BarraLateral