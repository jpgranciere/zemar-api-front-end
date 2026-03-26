import { useState, useEffect } from 'react';
import LayoutGrid from '../Icones/LayoutGrid';
import './estilo.css'

function Categorias(){
    const url = process.env.REACT_APP_URL_CATEGORIA;

    const [qtdCategorias, setQtdCategorias] = useState([]);

    useEffect(()=> {
        fetch(url)
        .then(response => response.json())
        .then(dados => setQtdCategorias(dados))
    },[])

    return (
        <div className="div-categoria">
            <div className="div-icone-categoria">
                <LayoutGrid size={20}/>
                <h1>Categorias</h1>
            </div>
            <div className="div-qtd-categorias">
                <p>{qtdCategorias.length} Categorias</p>
            </div>
        </div>
    )   
}

export default Categorias