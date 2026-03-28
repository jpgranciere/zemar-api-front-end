import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import BarraLateral from "../../componentes/BarraSuperior"
import './estilo.css'

function DetalhesProdutos(){
    const [listaCategoria, setListaCategoria] = useState([])
    const [busca, setBusca] = useState('')
    const [loading, setLoading] = useState(true)

    const { categoria } = useParams()
    const navigate = useNavigate()
    const url = process.env.REACT_APP_URL_LISTAR_TELA_CATEGORIAS

    useEffect(() => {
        setLoading(true)
        fetch(`${url}/${categoria}`)
            .then(r => r.json())
            .then(dados => {
                setListaCategoria(dados.content)
                setLoading(false)
            })
    }, [categoria])

    const nomeFormatado = categoria
        ? categoria.replaceAll('_', ' ').toLowerCase().replace(/^./, c => c.toUpperCase())
        : ''

    const produtosFiltrados = listaCategoria.filter(p =>
        p.nomeProduto.toLowerCase().includes(busca.toLowerCase()) ||
        p.codigoProduto.includes(busca)
    )

    return (
        <section className="detalhes-section">
            <BarraLateral />

            <div className="detalhes-wrapper">
                <button className="btn-voltar" onClick={() => navigate('/')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Voltar
                </button>

                <div className="detalhes-header">
                    <h1 className="detalhes-titulo">{nomeFormatado}</h1>
                    <div className="detalhes-subtitulo">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        </svg>
                        <span>Produtos ({produtosFiltrados.length})</span>
                    </div>
                </div>

                <div className="detalhes-busca-wrapper">
                    <svg className="busca-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                    </svg>
                    <input
                        className="detalhes-busca"
                        type="text"
                        placeholder="Buscar nesta categoria..."
                        value={busca}
                        onChange={e => setBusca(e.target.value)}
                    />
                </div>

                {loading ? (
                    <div className="detalhes-loading">
                        <div className="loading-spinner"/>
                        <p>Carregando produtos...</p>
                    </div>
                ) : produtosFiltrados.length === 0 ? (
                    <div className="detalhes-vazio">
                        <p>Nenhum produto encontrado.</p>
                    </div>
                ) : (
                    <div className="detalhes-grid">
                        {produtosFiltrados.map(p => (
                            <div className="produto-card" key={p.id}>
                                <div className="produto-card-img">
                                    <span className="produto-badge">{p.codigoProduto}</span>
                                    {p.imagemUrl
                                        ? <img src={p.imagemUrl} alt={p.nomeProduto} />
                                        : <div className="produto-img-placeholder">
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                            </svg>
                                          </div>
                                    }
                                </div>
                                <div className="produto-card-info">
                                    <p className="produto-card-nome">{p.nomeProduto}</p>
                                    <button className="produto-card-btn">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default DetalhesProdutos