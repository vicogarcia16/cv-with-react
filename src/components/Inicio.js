import React from 'react'
import { ListadoTrabajos } from './ListadoTrabajos'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
          Hola, soy Víctor García, <strong>Desarrollador de Software</strong> en México.
          Ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> de aplicaciones.
      </h1>
      <h2 className='title'>
          En mi portafolio encontraras mis proyectos y servicios.
          <Link to="/contacto">Contactame</Link>
      </h2>
      <section className="last-works">
        <h2 className='heading'>Últimos proyectos</h2>
        <p>Estos son los últimos proyectos que he creado.</p>
        <ListadoTrabajos limite="2"/>
      </section>
    </div>
  )
}
