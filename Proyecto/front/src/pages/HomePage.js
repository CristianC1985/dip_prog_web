import React from 'react';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
    <body>   

    <main>
      <div>
        <div>
          <img src="images/balayage.jpg" alt="balayage" />
        </div>

        <div>
          <img src="images/peinado.jpg" alt="peinado" />
        </div>

        <div>
          <img src="images/corte.jpg" alt="corte" />
        </div>
      </div>

      <div>
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
        <img src="images/cortemujer.jpeg" alt="puntas" />
      </div>

      <h2>Nuestros Servicios</h2>

      <section>
        <div class="divserv">
          <h3>Lavado</h3>
          <img  src="images/lavadocabello.jpeg" alt="" />
        </div>
        <div class="divserv">
          <h3>Corte</h3>

          <img src="images/cortecabello.jpeg" alt="" />
        </div>
        <div>
          <h3>Color</h3>

          <img  src="images/color.jpg" alt="" />
        </div>
        <div>
          <h3>Peinados</h3>

          <img src="images/peinados.jpeg" alt="" />
        </div>
        <div>
          <h3>Manicuría</h3>

          <img src="images/manicuria.jpg" alt="" />
        </div>
      </section>
    </main>

  
  </body>

    );
}

export default HomePage;