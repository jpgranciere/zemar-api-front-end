import './estilo.css'
import logo from '../../imagens/logo-zemar.svg'
import Menu from '../Icones/MenuHamburguer'
import BarraLoginAdmin from '../BarraLoginAdmin';

function BarraLateral({ onAbrirMenu }){
    return (
        <div className='header'>
            <img src={logo} alt="Logo Zemar" />
            <button onClick={onAbrirMenu} className="botao-menu">
                <Menu size={30} />
            </button>
        </div>
    )
}

export default BarraLateral