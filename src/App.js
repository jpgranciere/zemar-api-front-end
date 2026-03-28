import './App.css';
import Inicio from './Paginas/Inicio';
import Admin from './Paginas/Admin'
import Login from './Paginas/Login'
import DetalhesProdutos from './Paginas/DetalhesProdutos';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Inicio />} />
            <Route path="/admin" element={ <Admin />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/categoria/:categoria" element={ <DetalhesProdutos />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
