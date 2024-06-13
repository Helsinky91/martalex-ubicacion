import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
import logo from "../assets/Logo.png"
import AproxUbication from './AproxUbication';
import ExactUbication from '../components/ExactUbication';
import Friday from './Friday';
import Beaches from './Beaches';


function Header() {

  const [toggleState, setToggleState] = useState(true);

  const toggleContent = () => {
    setToggleState(!toggleState);
  };

  return (

    <div className="main-text">
      <img src={logo} alt="Logo MartAlex" width={300} />
      <p className="toggle-lang">
        <a href="#" onClick={toggleContent}>
          {toggleState ? 'Clica aquí para castellano' : 'Clic aquí per català'}
        </a>
      </p>

      {toggleState ? (
        // CAT info
        
        <section>
        
          <div className="background-blue">
            <p>La Major Festa de MartAlex tindrà lloc al llogarret de VilaMartAlex, al terme municipal de Porqueres, província de Girona. <br />
            L'esdeveniment s'ubica al recinte <b> "El Clar del Bosc" </b> i per tant allà és on heu de dirigir-vos per participar a La Major Festa. <br />
            Us facilitem la ubicació exacta de Google Maps: <br /><br />
              <a href="https://maps.app.goo.gl/7FAqdC46DEu75hyj7" target="_blank" rel="noopener noreferrer"><button className="btn btn-maps">Veure ubicació a Google Maps</button></a>
            </p>
            <p>
            La localitat més propera a VilaMartAlex és <b>Banyoles</b>, s'hi pot arribar en bus desde Barcelona i desde Girona. <br />
            A Banyoles hi ha un famós estany, i com és capital de comarca disposa de restaurants i supermercats.
            </p>
           
          </div>
          
          <div>
            <table>
            <thead>
                <tr>
                  <th>Ruta en autobús</th>
                  <th>Web bus Teisa</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Horari Barcelona - Banyoles</td>
                  <td><a href="https://www.teisa-bus.com/pdf/pdf_linies17.pdf" target="_blank" rel="noopener noreferrer">Aquí</a></td>

                </tr>
                <tr>
                  <td>Horari Girona - Banyoles</td>
                  <td><a href="https://www.teisa-bus.com/pdf/pdf_linies9.pdf" target="_blank" rel="noopener noreferrer">Aquí</a></td>

                </tr>
                
                </tbody>
            </table>
          
            <table>
            <thead>
                <tr>
                  <th>Taxis a Banyoles</th>
                  <th>Web Taxi</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TaxisBanyoles.com</td>
                  <td><a href="https://taxisbanyoles.com/" target="_blank" rel="noopener noreferrer">Aquí</a></td>

                </tr>
                <tr>
                  <td>TaxiBanyoles.net</td>
                  <td><a href="http://www.taxibanyoles.net/" target="_blank" rel="noopener noreferrer">Aquí</a></td>

                </tr>
                
                </tbody>
            </table>
   
          </div>
          <div>

          </div>

          <div className="background-red">

            <p>Podeu entrar a l’allotjament a partir de les <b>12h del dissabte 15/6/2024.</b> <br /> <br />NO HI HAURÀ SERVEI DE BAR, però podeu fer el check-in, deixar l’equipatge i dinar pel vostre compte.
              <br />
              A les 17h començarà l’esdeveniment, recordeu preveure prou temps per caracteritzar-vos.</p>
          </div>
          <div className="background-blue">

            <p>Diumenge al matí l'esmorzar està inclòs.
              <br />
              Tot seguit farem servir el trajo de bany, tovallola de platja i xancles de piscina.
            </p>
            <p>
              DRESSCODE diumenge (opcional, es valorarà positivament):
              <br />
              MARINA D’OR + MARBELLA + MIAMI VICE.  </p>
            <p>Ens han ofert dinar tots junts per rematar el Fiestón (proposaran un menú). Aquest dinar té un cost de 15€ per cap (13€ infants), que s’ha de confirmar i pagar amb 15 dies d’antel·lació.</p>
            <p><b>Si us plau, confirmeu-nos al llistat de cosplays (perfil → editar perfil → comida domingo Si/No) o per Telegram / Whatsapp si us quedareu a dinar diumenge.</b></p>
            <p>Un cop haguem dinat, donarem per acabat el Major Fiestón de MartAlex.</p>
          </div>

          <h3>Localitats recomanades per dormir divendres aprop del Fiestón</h3>
          <div>

            <table className="friday-table">
              <thead>
                <tr>
                  <th>Localitat</th>
                  <th>Duració del viatge fins al Fiestón</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Figueres</td>
                  <td>40 min</td>

                </tr>
                <tr>
                  <td>Olot</td>
                  <td>40 min</td>
                </tr>
                <tr>
                  <td>Girona</td>
                  <td>40 min</td>
                </tr>

              </tbody>
            </table>
          </div>

          <h3>Platges properes al Fiestón	</h3>
          <div>

            <table className="friday-table">
              <thead>
                <tr>
                  <th>Localitat</th>
                  <th>Distància</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Begur</td>
                  <td>1 h</td>

                </tr>
                <tr>
                  <td>L'Escala</td>
                  <td>1 h</td>
                </tr>
                <tr>
                  <td>Lloret de Mar</td>
                  <td>1h</td>
                </tr>
                <tr>
                  <td>Palamós</td>
                  <td>1h</td>
                </tr>

              </tbody>
            </table>
          </div>


          <h3>Informació sobre distàncies</h3>
          <AproxUbication />
          {/* <ExactUbication/> */}


        </section>
      ) : (
        // ESP info
        <section>
                   <div className="background-blue">
            <p>La Mayor Fiesta de MartAlex tendrá lugar en la aldea de VilaMartAlex, en el término municipal de Porqueres, provincia de Girona. <br />
            El evento se ubica en el recinto <b> "El Clar del Bosc" </b> y por lo tanto allí es donde debéis dirigiros para participar en La Major Festa. <br />
            Os facilitamos la ubicación exacta de Google Maps: <br /><br />
              <a href="https://maps.app.goo.gl/7FAqdC46DEu75hyj7" target="_blank" rel="noopener noreferrer"><button className="btn btn-maps">Ver ubicación en Google Maps</button></a>
            </p>
            <p>
            La localidad más cercana a VilaMartAlex es <b>Banyoles</b>, se puede llegar en autobús desde Barcelona y desde Girona.<br />
            En Banyoles hay un famoso estanque, y como capital de comarca dispone de restaurantes y supermercados.
            </p>
           
          </div>
          
          <div>
            <table>
            <thead>
                <tr>
                  <th>Ruta en autobús</th>
                  <th>Web bus Teisa</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Horario Barcelona - Banyoles</td>
                  <td><a href="https://www.teisa-bus.com/pdf/pdf_linies17.pdf" target="_blank" rel="noopener noreferrer">Aquí</a></td>

                </tr>
                <tr>
                  <td>Horario Girona - Banyoles</td>
                  <td><a href="https://www.teisa-bus.com/pdf/pdf_linies9.pdf" target="_blank" rel="noopener noreferrer">Aquí</a></td>

                </tr>
                
                </tbody>
            </table>
          
            <table>
            <thead>
                <tr>
                  <th>Taxis en Banyoles</th>
                  <th>Web Taxi</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TaxisBanyoles.com</td>
                  <td><a href="https://taxisbanyoles.com/" target="_blank" rel="noopener noreferrer">Aquí</a></td>

                </tr>
                <tr>
                  <td>TaxiBanyoles.net</td>
                  <td><a href="http://www.taxibanyoles.net/" target="_blank" rel="noopener noreferrer">Aquí</a></td>

                </tr>
                
                </tbody>
            </table>
   
          </div>
          <div className="background-red">
            <p> Podéis acceder al alojamiento a partir de las <b> 12h del sábado 15/6/2024 </b>.
              <br /><br />
              NO HAY SERVICIO DE BAR, però podéis hacer el check-in, dejar el equipaje y comer por vuestra cuenta.
              <br />
              A las 17h empezará el evento, recordad preveer el tiempo necesario para caracterizarse.</p>

          </div>
          <div className="background-blue">

            <p>El domingo por la mañana el desayuno está incluido. 
              <br />
              Acto seguido daremos uso al traje de baño, toalla de playa y las chanclas de piscina. </p>
              <p>DRESSCODE domingo (opcional, se valorará positivamente):  
                <br />
                MARINA D’OR + MARBELLA + MIAMI VICE.  </p>

            <p>Nos han ofrecido comer todos juntos para rematar el Fiestón (propondrán un menú), esta comida tiene un coste de 15€ por cabeza (13€ niños), y se debe confirmar y pagar con 15 días de antelación. </p>
            <p><b>Por favor, confirmadnos en el listado de cosplays (perfil → editar perfil → comida domingo Si/No) o por Telegram / Whatsapp si os quedaréis a comer el domingo.</b> </p>
            <p>Una vez acabemos de comer daremos por finalizado el Mayor Fiestón de MartAlex.</p>
          </div>
          <h4>Localidades recomendadas para dormir el viernes cerca del Fiestón</h4>
          <div>

            <table className="friday-table">
              <thead>
                <tr>
                  <th>Localidad</th>
                  <th>Duración del viage hasta el Fiestón</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Figueres</td>
                  <td>40 min</td>

                </tr>
                <tr>
                  <td>Olot</td>
                  <td>40 min</td>
                </tr>
                <tr>
                  <td>Girona</td>
                  <td>40 min</td>
                </tr>

              </tbody>
            </table>
          </div>

          <h4>Playas cercanas al Fiestón	</h4>
          <div>

            <table className="friday-table">
              <thead>
                <tr>
                  <th>Localidad</th>
                  <th>Distáncia</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Begur</td>
                  <td>1 h</td>

                </tr>
                <tr>
                  <td>L'Escala</td>
                  <td>1 h</td>
                </tr>
                <tr>
                  <td>Lloret de Mar</td>
                  <td>1h</td>
                </tr>
                <tr>
                  <td>Palamós</td>
                  <td>1h</td>
                </tr>

              </tbody>
            </table>
          </div>

          <h4>Información sobre distáncias</h4>
          <AproxUbication />

          {/* <ExactUbication/> */}
        </section>
      )}


      {/* <Link to={"/"}>Vuelve a entrar</Link> */}

    </div>
  )
}

export default Header