import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
import logo from "../assets/Logo.png"

function Header() {

  const [toggleState, setToggleState] = useState(true);

  const toggleContent = () => {
    setToggleState(!toggleState);
  };

  return (
    
    <div className="">
      <img src={logo} alt="Logo MartAlex" width={300} />
      <p className="toggle-lang">
          <a href="#" onClick={toggleContent}>
            {toggleState ? 'Clica aquí para castellano' : 'Clic aquí per català'}
          </a>
        </p>

        {toggleState ? (
          // CAT info
          <section>
            <p>
            Recomanem venir en cotxe. en transport públic és complicat arribar. Intenteu compartir cotxe per amenitzar el viatge. 
            </p><p>
            Si algú vol venir amb antel·lació i dormir "aprop" la nit anterior, o fer una part en transport públic (p.e. fins a Barcelona), que ens contacti i trobarem una sol·lució.
            </p>
            <h4>Informació sobre distàncies</h4>
          </section>
        ) : (
          // ESP info
          <section>
            <p>
            Recomendamos venir en coche. En transporte público es complicado llegar. Intentad compartir coche para amenizar tan largo viaje. 
            </p><p>
            Si alguien quiere venir con antelación y dormir "cerca" la noche anterior, o hacer una parte del viaje en transporte público (p.e. hasta Barcelona), que nos contacte y buscamos una solución.				
            </p>
            <h4>Información sobre distáncias</h4>

          </section>
        )}

      
      {/* <Link to={"/"}>Vuelve a entrar</Link> */}
    
    </div>
  )
}

export default Header