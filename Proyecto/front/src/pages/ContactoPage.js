import React from 'react';

const ContactoPage = (props) => {
    return (
        <main>

        <h2>Comunicate con nosotros llenando el siguiente formulario</h2>
      <section class="form">
        <form action="" method="" class="formulario">
          <p>
            <label for="">Nombre y apellido</label>
            <input type="text" name=""/>
          </p>

          <p>
            <label for="">Email</label>
            <input type="mail" name="" />
          </p>
          <p>
            <label for="">Teléfono</label>
            
          </p>
          <p>
            <label for="mensaje">Mensaje</label>            
            <textarea name="Mensaje"></textarea>
          </p>
          <p class="acciones"><input type="submit" value="Enviar" />
          </p>
        </form>
      </section>
    </main>
    );
}

export default ContactoPage;