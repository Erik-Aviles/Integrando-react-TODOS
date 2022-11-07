import React from 'react';
import notFound from './Not-found.jpg'

const NotFound = () => {
  return (
    <div style={ {witdh: 100} } >
      <img src={notFound} alt='imagen de no encontrado' /> 
    </div>
  )
}

export { NotFound };
