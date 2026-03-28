import BarraLateral from '../BarraSuperior';
import BarraPesquisa from '../BarraPesquisa';
import Categorias from '../Categorias';
import CardsCategoria from '../CardsCategoria';
import BarraLoginAdmin from '../BarraLoginAdmin';
import { useState, useEffect } from 'react'
import ListaResultados from '../ListaResultados'
import './estilo.css'

function Header(){
    const [barraAberta, setBarraAberta] = useState(false);
    const [busca, setBusca] = useState('');
    const [resultados, setResultados] = useState([]);
    const urlBusca = process.env.REACT_APP_URL_LISTAR_PELO_NOME;

    useEffect(() => {
        if(!busca || busca.length < 2) {
            setResultados([])
            return
        }
        fetch(`${urlBusca}/${busca}`)
        .then(r => r.json())
        .then(dados => setResultados(dados.content))
    }, [busca])

    return (
        <header className="App-header">
            <BarraLateral onAbrirMenu={() => setBarraAberta(true)} />
            <div className="body-header">
                <BarraPesquisa busca={busca} setBusca={setBusca}/>
                {resultados.length > 0 && <ListaResultados produtos={resultados} />}
                <Categorias/>
                <CardsCategoria/>
            </div>

            {barraAberta && (
                <>
                    <div className="overlay" onClick={() => setBarraAberta(false)} />
                    <div className="barra-lateral-admin">
                        <BarraLoginAdmin onFechar={() => setBarraAberta(false)} />
                    </div>
                </>
            )}
        </header>
    )   
}

export default Header