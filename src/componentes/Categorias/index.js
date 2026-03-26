import { useState, useEffect } from 'react';
import LayoutGrid from '../Icones/LayoutGrid';
import './estilo.css'

function Categorias(){
    const [qtdCategorias, setQtdCategorias] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:8080/admin/categoria')
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