import React from 'react'
// import { Link } from 'react-router-dom'
import logo from "../assets/Logo.png"

function Header() {
  return (
    
    <div className="">
      <img src={logo} alt="Logo MartAlex" width={300} />
      <h1>On serà el bodorrio? / ¿Dónde será el bodorrio?</h1>
      
      {/* <Link to={"/"}>Vuelve a entrar</Link> */}
    
    </div>
  )
}

export default Header