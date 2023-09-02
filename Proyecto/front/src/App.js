
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/layout/Header';
import Nav from '../src/componentes/layout/Nav';
import Footer from '../src/componentes/layout/Footer';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';


function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="nosotros" element={<NosotrosPage />} />
        <Route path="novedades" element={<NovedadesPage />} />
        <Route path="contacto" element={<ContactoPage />} />



      </Routes>
      
      </BrowserRouter>

    </div>
  );
}
export default App;
