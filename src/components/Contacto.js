import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>
      <form className='contact' action="mailto:mg_619@hotmail.com">
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="text" placeholder='Email' />
        <textarea name="" id="" cols="30" rows="10" 
        placeholder='Motivo de contacto'></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
