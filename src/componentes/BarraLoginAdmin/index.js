import './estilo.css'
import IconeFechar from '../Icones/Fechar'
import IconeEntrar from '../Icones/Entrar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function BarraLoginAdmin({ onFechar }){
    const navigate = useNavigate()

    return (
        <div className="barra-login-admin">
            <div className="menu-titulo">
                <h2>Menu</h2>
                <button onClick={onFechar}>
                    <IconeFechar size={20} />
                </button>
            </div>

            <button className="botao-entrar" onClick={() => navigate('/login')}>
                <IconeEntrar size={20} />
                Entrar
            </button>
        </div>
    )
}

export default BarraLoginAdmin