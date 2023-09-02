import React from 'react';
import '../styles/components/pages/HomePage.css';
import '../styles/components/pages/ServiciosPage.css';

const ServiciosPage = (props) => {
    return (
        <main className="holder">

        <h2>Servicios</h2>
        <div class="servicio">
            <img src="img/corte caballero.jpg" alt="corte">
            <div class="info">
                <h4> Corte </h4>
                <p class="p"> Tijeras, máquinas, varios filos, precisión, técnica y sobre todo un estilo único hacen fundamental el Corte en Fusión.
                    ¡Nuestro equipo de profesionales podrá asesorarte y hacer lucir tu pelo con el look ideal! El pelo es el accesorio más importante que tenemos.
                    El corte y peinado está en constante perfeccionamiento sobre nuevas técnicas y tendencias. No dudes en dejarte asesorar. Cada uno de ellos se destaca en poder interpretar tu deseo y adaptarlo para un fácil y práctico día a día. Nuestro corte es diseñado exclusivamente para vos y tu vida cotidiana.
    
                </p>

            </div>

        </div>
        <div class="servicio">
            <img src="images/lavado.jpeg" alt="lavado">
            <div class="info">
                <h4> Lavado </h4>
                <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis corporis aut consequatur eaque
                    aliquam nam libero expedita dicta, similique perferendis, magnam aspernatur a vero deserunt eos at
                    id? Quasi blanditiis nesciunt, libero eos, quam odit autem alias nihil quae beatae hic ratione quas
                    explicabo repudiandae! Voluptas perspiciatis atque sequi laudantium. Voluptas nihil nesciunt soluta
                    id nulla ipsam facilis pariatur, fuga autem temporibus sapiente eius voluptate officiis cum corporis
                    mollitia animi dolor voluptates, tenetur dolore cupiditate illo quia. Ratione alias sit in nisi
                    eaque laudantium consectetur eos quis error, maiores culpa numquam temporibus ducimus cum sequi
                    voluptatem dignissimos, expedita unde!

                </p>

            </div>



        </div>

        <div className="servicio">
            <img src="images/peinados.jpeg" alt="peinados">
            <div class="info">
                <h4> Peinados </h4>
                <p class="p">Existe una amplia forma de llegar a tu peinado, Brushing, planchitas, ondas, y muchos más.

                </p>

            </div>



        </div>
        <div class="servicio">
            <img src="images/coloracion.jpeg" alt="coloracion">
            <div class="info">
                <h4> Coloración </h4>
                <p class="p">El servicio de color es un universo infinito dentro de nuestro salón.
                    Nuestra marca cuenta con el mejor equipo de coloristas del país. Nos perfeccionamos constantemente para poder abordar todas tus necesidades.
                    Te asesoramos de una manera minuciosa para poder aconsejarte sobre qué es lo que tu cabello necesita. Cuáles son los pasos que llevara tu pelo para llegar al objetivo que deseas. Nuestra misión fundamental es mantener tu pelo sano y que luzca intacto, garantizamos tu felicidad absoluta.  
                    Como expresamos anteriormente, el universo de color es inmenso e infinito, por eso y para orientarte, te invitamos a que leas atentamente cada una de las descripciones de toda nuestra carta de servicios en color que tenemos para lograr satisfacer tus necesidades.

                </p>

            </div>



        </div>

        <div class="servicio">
            <img src="images/manicuria.jpg" alt="manicuria">
            <div class="info">
                <h4> Manicuria </h4>
                <p class="p">El cuidado de las uñas ha tomado auge en los últimos años y se ha convertido en un accesorio fundamental de la moda. En Fusión abogamos por brindar un servicio de excelencia en cuanto técnicas y vanguardias en el mundo del nail art.  Ofrecemos servicios tanto permanentes como semipermanente, kapping, esculpidas. 

                </p>

            </div>



        </div>

    </main>

    );
}

export default ServiciosPage;
