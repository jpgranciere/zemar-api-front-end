import BarraLateral from '../BarraSuperior';
import BarraPesquisa from '../BarraPesquisa';
import Categorias from '../Categorias';
import CardsCategoria from '../CardsCategoria';
import BarraLoginAdmin from '../BarraLoginAdmin';
import { useState } from 'react'

import './estilo.css'

function Header(){
    const [barraAberta, setBarraAberta] = useState(false)

    return (
        <header className="App-header">
            <BarraLateral onAbrirMenu={() => setBarraAberta(true)} />
            <div className="body-header">
                <BarraPesquisa/>
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