import '../styles/components/pages/HomePage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {
  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormdata] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormdata(oldData => ({
      ...oldData,
      [name]: value
    }));
  }
  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await
    axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormdata(initialForm)
    }
  }
    return (
        <main className='holder contacto'>
          
<div> 
        <h2>Comunicate con nosotros llenando el siguiente formulario</h2>
      
        <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
          </p>

          <p>
            <label for="email">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
          </p>
          <p>
            <label for="">Teléfono</label>
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
            
          </p>
          <p>
            <label for="mensaje">Mensaje</label>            
            <textarea name="mensaje"  value={formData.mensaje} onChange={handleChange}>
            </textarea>
          </p>
          <p className="acciones"><input type="submit" value="Enviar" />
          </p>
        </form>
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg} </p> : null}

        </div>
      
    </main>
    );
};

export default ContactoPage;