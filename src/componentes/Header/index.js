import BarraLateral from '../BarraSuperior';
import BarraPesquisa from '../BarraPesquisa';
import Categorias from '../Categorias';
import CardsCategoria from '../CardsCategoria';
import './estilo.css'

function Header(){
    return (
        <header className="App-header">
            <BarraLateral/>
            <div className="body-header">
                <BarraPesquisa/>
                <Categorias/>
                <CardsCategoria/>
            </div>
        </header>
    )   
}

export default Header