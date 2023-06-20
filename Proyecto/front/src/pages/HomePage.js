import React from 'react';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
    <body>   

    <main>
      <div class="imagenes">
        <div class="img">
          <img src="/public/images/balayage.jpg" alt="balayage" />
        </div>

        <div class="img1">
          <img src="img/peinado.jpg" alt="peinado" />
        </div>

        <div class="img2">
          <img src="img/corte.jpg" alt="corte" />
        </div>
      </div>

      <div class="quienes">
        <div class="info">
          <h4>Quienes somos?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            veritatis corporis aut consequatur eaque aliquam nam libero expedita
            dicta, similique perferendis, magnam aspernatur a vero deserunt eos
            at id? Quasi blanditiis nesciunt, libero eos, quam odit autem alias
            nihil quae beatae hic ratione quas explicabo repudiandae! Voluptas
            perspiciatis atque sequi laudantium. Voluptas nihil nesciunt soluta
            id nulla ipsam facilis pariatur, fuga autem temporibus sapiente eius
            voluptate officiis cum corporis mollitia animi dolor voluptates,
            tenetur dolore cupiditate illo quia. Ratione alias sit in nisi eaque
            laudantium consectetur eos quis error, maiores culpa numquam
            temporibus ducimus cum sequi voluptatem dignissimos, expedita unde!
          </p>
        </div>
        <img src="img/cortemujer.jpeg" alt="puntas" />
      </div>

      <h2>Nuestros Servicios</h2>

      <section>
        <div class="divserv">
          <h3>Lavado</h3>
          <img class="servdos" src="img/lavadocabello.jpeg" alt="" />
        </div>
        <div class="divserv">
          <h3>Corte</h3>

          <img class="servdos" src="img/cortecabello.jpeg" alt="" />
        </div>
        <div class="divserv">
          <h3>Color</h3>

          <img class="servdos" src="img/color.jpg" alt="" />
        </div>
        <div class="divserv">
          <h3>Peinados</h3>

          <img class="servdos" src="img/peinados.jpeg" alt="" />
        </div>
        <div class="divserv">
          <h3>Manicuría</h3>

          <img class="servdos" src="img/manicuria.jpg" alt="" />
        </div>
      </section>
    </main>

  
  </body>

    );
}

export default HomePage;