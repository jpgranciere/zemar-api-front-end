
import { useNavigate } from 'react-router-dom'
import './estilo.css'

function ListaResultados({ produtos }){
    const navigate = useNavigate()

    return (
        <div className="lista-resultados">
            <p className="resultados-titulo">{produtos.length} resultado(s) encontrado(s)</p>
            {produtos.map(p => (
                <div className="resultado-item" key={p.id} onClick={() => navigate(`/categoria/${p.categoria}`)}>
                    <div className="resultado-thumb">
                        {p.imagemUrl
                            ? <img src={p.imagemUrl} alt={p.nomeProduto} />
                            : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                              </svg>
                        }
                    </div>
                    <div className="resultado-info">
                        <p className="resultado-nome">{p.nomeProduto}</p>
                        <div className="resultado-tags">
                            <span className="resultado-codigo">#{p.codigoProduto}</span>
                            <span className="resultado-categoria">{p.categoria.replaceAll('_', ' ')}</span>
                        </div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </div>
            ))}
        </div>
    )
}

export default ListaResultados