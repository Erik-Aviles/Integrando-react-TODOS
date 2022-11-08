import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from './Not-found.jpg'

const NotFound = () => {
  const navegate = useNavigate();
  return (
    <div style={ {witdh: 100} } >
      <img src={notFound} alt='imagen de no encontrado' /> 
      <button onClick={() => navegate('/')}>Volver al inicio</button>
    </div>
  )
}

export { NotFound };
