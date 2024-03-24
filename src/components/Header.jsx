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
          <div className="background-red">

          <p>Podeu entrar a l’allotjament a partir de les <b>12h del dissabte 15/6/2024.</b> <br /> <br />NO HI HAURÀ SERVEI DE BAR, però podeu fer el check-in, deixar l’equipatge i dinar pel vostre compte. 
          <br />
          A les 17h començarà l’esdeveniment, recordeu preveure prou temps per caracteritzar-vos.</p>
          </div>
          <div className="background-blue">

          <p>Diumenge al matí l'esmorzar està inclòs, i tot seguit donarem ús d'el trajo de bany, tovallola de platja i les xancles de piscina. 
            <br />
          DRESSCODE diumenge: MARINA D’OR + MARBELLA + MIAMI VICE. </p>
          <p>Ens han ofert dinar tots junts per rematar el Fiestón (ens han de confirmar el menú), aquest dinar té un cost de 15€ per cap (13€ infants), que s’ha de confirmar i pagar amb 15 dies d’antel·lació. 
            <br /><b>Si us plau, confirmeu-nos al llistat de cosplays o per Telegram / Whatsapp si us quedareu a dinar diumenge.</b></p>
          <p>Un cop haguem dinat, donarem per acabat el Major Fiestón de MartAlex</p>
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
          <div className="background-red">
          <p> Podéis acceder al alojamiento a partir de las <b> 12h del sábado 15/6/2024 </b>.  
          <br /><br /> 
          NO HAY SERVICIO DE BAR, però podéis hacer el check-in, dejar el equipaje y comer por vuestra cuenta. 
          <br />
          A las 17h empezará el evento, recordad preveer el tiempo necesario para caracterizarse.</p>

          </div>
          <div className="background-blue">

          <p>El domingo por la mañana el desayuno está incluido, y acto seguido daremos uso al traje de baño, toalla de playa y las chanclas de piscina. 
            <br />
            DRESSCODE domingo: MARINA D’OR + MARBELLA + MIAMI VICE.  </p>

          <p>Nos han ofrecido comer todos juntos para rematar el Fiestón (tienen que confirmarnos el menú), esta comida tiene un coste de 15€ por cabeza (13€ niños), y se debe confirmar y pagar con 15 días de antelación. 
            <br />

            <b>Por favor, confirmadnos en el listado de cosplays o por Telegram / Whatsapp si os quedaréis a comer el domingo.</b> </p>
          <p>Una vez acabemos de comer daremos por finalizado el Mayor Fiestón de MartAlex</p>
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