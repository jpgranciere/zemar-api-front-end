import './estilo.css'
import BarraLateral from "../../componentes/BarraSuperior"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

function Admin(){
    const url = process.env.REACT_APP_URL_PRODUTOS_RECENTES;

    const [produtosRecentes, setProdutosRecentes] = useState([])

    useEffect(()=> { 
        fetch(url)
        .then(response => response.json())
        .then(dados => setProdutosRecentes(dados.content))
    }, []);


    const navigate = useNavigate()
    return (
        <section className="admin-section">
            <BarraLateral/>

            <div className="admin-wrapper">
                <div className="admin-topo">
                    <div>
                        <h2 className="admin-title">Painel Admin</h2>
                    </div>
                    <button className="btn-sair" onClick={()=> navigate('/')}>Sair</button>
                </div>

                
                <div className="admin-acoes-grid">
                    <button className="card-acao destaque">
                        <div className="card-acao-icone">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                <polyline points="12 22.08 12 12"/><line x1="3.27" y1="6.96" x2="12" y2="12.04"/><polyline points="21 6.96 12 12.04"/>
                            </svg>
                        </div>
                        <span>Novo Produto</span>
                    </button>

                    <button className="card-acao">
                        <div className="card-acao-icone">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                            </svg>
                        </div>
                        <span>Editar Produto</span>
                    </button>

                    <button className="card-acao perigo">
                        <div className="card-acao-icone">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
                            </svg>
                        </div>
                        <span>Remover Produto</span>
                    </button>
                </div>

                {/* Produtos recentes */}
                <div className="admin-recentes">
                    <div className="recentes-header">
                        <h3>Produtos Recentes</h3>
                        <a href="#" className="ver-todos">Ver todos →</a>
                    </div>

                    <div className="lista-produtos">
                        {produtosRecentes.map((p) => (
                            <div className="produto-item" key={p.id}>
                                <div className="produto-thumb">
                                    <img src={p.imagemUrl} alt={p.nomeProduto} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'10px'}}/>
                                </div>
                                <div className="produto-info">
                                    <p className="produto-nome">{p.nomeProduto}</p>
                                    <span className="produto-id">#{p.codigoProduto}</span>
                                </div>
                                <button className="btn-ver">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Admin