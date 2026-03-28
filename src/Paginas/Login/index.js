import BarraLateral from "../../componentes/BarraSuperior"
import BarraLoginAdmin from "../../componentes/BarraLoginAdmin";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './estilo.css'

function Login(){
    const [barraAberta, setBarraAberta] = useState(false)
    const navigate = useNavigate()

    return (
        <section className="login-section">
            <BarraLateral onAbrirMenu={() => setBarraAberta(true)} />
            <div className="div-login-screen">
                <div className="login-bg-glow"/>
                <div className="div-card-login">
                    <div className="login-logo">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <rect width="36" height="36" rx="10" fill="url(#grad)"/>
                            <path d="M10 18L16 24L26 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <defs>
                                <linearGradient id="grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6366f1"/>
                                    <stop offset="1" stopColor="#8b5cf6"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="login-header">
                        <h2>Acesso restrito</h2>
                        <p>Entre com suas credenciais de administrador</p>
                    </div>

                    <div className="login-form">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-wrapper">
                                <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                                </svg>
                                <input id="email" type="text" placeholder="admin@email.com"/>
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="senha">Senha</label>
                            <div className="input-wrapper">
                                <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                                <input id="senha" type="password" placeholder="••••••••"/>
                            </div>
                        </div>

                        <button className="btn-entrar" onClick={()=> navigate('/admin')}>Entrar no Painel</button>
                    </div>

                    <a className="link-voltar" href="#" onClick={()=> navigate('/')}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        Voltar para a loja
                    </a>
                </div>
            </div>

            {barraAberta && (
                <>
                    <div className="overlay" onClick={() => setBarraAberta(false)} />
                    <div className="barra-lateral-admin">
                        <BarraLoginAdmin onFechar={() => setBarraAberta(false)} />
                    </div>
                </>
            )}
        </section>
    )
}

export default Login