import React from 'react'
// import { Link } from 'react-router-dom'
import spainMapRed from "../assets/SpainMapRed.png"

function AproxUbication() {
  return (
    
    <div className="">
           
      {/* <img src={spainMapRed} alt="mapa de España" width={550}/> */}
      <div className="boda-info">
        
      <p>Informació sobre distàncies / Información sobre distáncias</p>
      <table>
        <thead>
          <tr>
            <th>Ciudad de Origen</th>
            <th>Tiempo Aprox (h)</th>
            <th>Kilómetros Aprox</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desde Barcelona</td>
            <td>1.75</td>
            <td>130</td>
          </tr>
          <tr>
            <td>Desde Leciñena</td>
            <td>4</td>
            <td>370</td>
          </tr>
          <tr>
            <td>Desde Zaragoza</td>
            <td>3.75</td>
            <td>380</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      </div>

    </div>
  )
}

export default AproxUbication