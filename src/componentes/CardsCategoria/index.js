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
import { useNavigate } from 'react-router-dom'

function CardsCategoria(){
    const url = process.env.REACT_APP_URL_CATEGORIA;
    const navigate = useNavigate()
    const [categoria, setCategoria] = useState([]);

    useEffect(()=> {
        fetch(url)
        .then(response => response.json())
        .then(dados => setCategoria(dados))
    }, []);

    const icones = [DropLets, SprayCan, Waves, Eraser, Wind, Hand, Trash, Sparkles]



    return (
    <div className="div-categoria-cards">
        {categoria.map((item, index) => {
            const Icone = icones[index]
            const nomeFormatado = item.replaceAll("_", " ").toLowerCase().replace(/^./, c => c.toUpperCase())
            return (
                <div className="cards" key={item} onClick={() => navigate(`/categoria/${item}`)}>
                    <Icone size={24} />
                    <p>{nomeFormatado}</p>
                    <a>ver produto</a>
                </div>
            )
        })}
    </div>
)
}

export default CardsCategoria