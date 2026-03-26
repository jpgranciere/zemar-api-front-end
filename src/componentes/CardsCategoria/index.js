import { useState, useEffect } from 'react';
import './estilo.css'
import DropLets from "../Icones/DropLets"
import Eraser from "../Icones/Eraser"
import Hand from "../Icones/Hand"
import Sparkles from "../Icones/Sparkles"
import SprayCan from "../Icones/SprayCan"
import Trash from "../Icones/Trash"
import Waves from "../Icones/Waves"
import Wind from "../Icones/Wind"


function CardsCategoria(){
    const url = process.env.REACT_APP_URL_CATEGORIA;

    const [categoria, setCategoria] = useState([]);

    useEffect(()=> {
        fetch(url)
        .then(response => response.json())
        .then(dados => setCategoria(dados))
    }, []);

    const categoriasLimpas = categoria.map(item =>
        item.replaceAll("_", " ").toLowerCase().replace(/^./, c => c.toUpperCase())
    )

    const icones = [DropLets, SprayCan, Waves,Eraser, Wind, Hand, Trash, Sparkles]

    return (
    <div className="div-categoria-cards">
        {categoriasLimpas.map((item, index) => {
            const Icone = icones[index]
            return (
                <div className="cards" key={item}>
                    <Icone size={24} />
                    <p>{item}</p>
                    <a>ver produto</a>
                </div>
            )
        })}
    </div>
)
}

export default CardsCategoria