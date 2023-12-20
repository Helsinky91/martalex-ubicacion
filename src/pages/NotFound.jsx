import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="notFound-page">
      <h1>Vaya, esta página no existe...</h1>
      <Link to={"/"}>Ver página principal</Link>
    </div>
  )
}

export default NotFound