import './estilo.css'
import IconeFechar from '../Icones/Fechar'
import IconeEntrar from '../Icones/Entrar'
import { useState } from 'react'


function BarraLoginAdmin({ onFechar }){
    return (
        <div className="barra-login-admin">
            <div className="menu-titulo">
                <h2>Menu</h2>
                <button onClick={onFechar}>
                    <IconeFechar size={20} />
                </button>
            </div>

            <button className="botao-entrar">
                <IconeEntrar size={20} />
                Entrar
            </button>
        </div>
    )
}

export default BarraLoginAdmin