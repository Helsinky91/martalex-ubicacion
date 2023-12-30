import React from 'react'
// import { Link } from 'react-router-dom'
import spainMapRed from "../assets/SpainMapRed.png"

function AproxUbication() {
  return (
    
    <div className="">
           
      {/* <img src={spainMapRed} alt="mapa de España" width={550}/> */}
      <div className="boda-info">
        
      
      <table>
        <thead>
          <tr>
            <th>Origen</th>
            <th>Tiempo aprox</th>
            <th>Km aprox</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Mataró</td>
            <td>1h 15min</td>
            <td>100 Km</td>
          </tr>
          <tr>
            <td>Montmeló</td>
            <td>1h 15min</td>
            <td>110 Km</td>
          </tr>
          <tr>
            <td>Barcelona</td>
            <td>1h 45min</td>
            <td>130 Km</td>
          </tr>
          <tr>
            <td>Vilanova i la Geltrú</td>
            <td>2h</td>
            <td>180 Km</td>
          </tr>
          <tr>
            <td>Zaragoza</td>
            <td>3h 45min</td>
            <td>380 Km</td>
          </tr>
          <tr>
            <td>Plasencia del Monte</td>
            <td>4h</td>
            <td>360 Km</td>
          </tr>
          <tr>
            <td>Leciñena</td>
            <td>4h</td>
            <td>370 Km</td>
          </tr>
          <tr>
            <td>València</td>
            <td>4h 50min</td>
            <td>370 Km</td>
          </tr>
          <tr>
            <td>Murcia</td>
            <td>6h</td>
            <td>710 Km</td>
          </tr>
          <tr>
            <td>Durango</td>
            <td>7h 15min</td>
            <td>700 Km</td>
          </tr>
          <tr>
            <td>Colindres</td>
            <td>7h 20min</td>
            <td>730 Km</td>
          </tr>
          <tr>
            <td>Madrid</td>
            <td>7h 30min</td>
            <td>700 Km</td>
          </tr>
          <tr>
            <td>Granada</td>
            <td>9h 30min</td>
            <td>975 Km</td>
          </tr>
          <tr>
            <td>Bruxelles</td>
            <td>13h 40min</td>
            <td>1264 Km</td>
          </tr>
          
        </tbody>
      </table>
      </div>

    </div>
  )
}

export default AproxUbication