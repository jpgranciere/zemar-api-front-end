import './estilo.css'

function BarraPesquisa(){
    return (
        <div className='div-barra-pesquisa'>
            <input className='input-barra-pesquisa' type="text" placeholder="Buscar por código ou descrição..."/>
        </div>
    )
}

export default BarraPesquisa