import './estilo.css'

function BarraPesquisa({ busca, setBusca }){
    return (
        <div className='div-barra-pesquisa'>
            <input
                className='input-barra-pesquisa'
                type="text"
                placeholder="Buscar por código ou descrição..."
                value={busca}
                onChange={e => setBusca(e.target.value)}
            />
        </div>
    )
}

export default BarraPesquisa