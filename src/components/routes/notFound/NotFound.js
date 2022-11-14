import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navegate = useNavigate();
  return (
    <div style={ {textAlign: 'center'} } >
      <h1>En construccion</h1>  
      <button onClick={() => navegate('/')}>Volver al inicio</button>
    </div>
  )
}

export { NotFound };
