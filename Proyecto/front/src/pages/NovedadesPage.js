import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/pages/HomePage.css';
import NovedadItem from '../componentes/novedades/NovedadItem';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);
    useEffect(() => {
        const cargaNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargaNovedades();
    }, []);
    return (
        <section className='holder'>
            <h2>Novedades</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )
            }

        </section>
      
    );
}

export default NovedadesPage;