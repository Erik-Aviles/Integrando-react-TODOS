import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css'

const ChangeAlert = ( { sincronize }) => {
  
  const {show, toogleShow} = useStorageListener(sincronize);

  if (show) {
    return (
      <div className='change-bg'>
        <div className='messaje-sincronize-container'>
        <p className='messaje-sincronize'>Hubo cambios en otra ventana</p>
        <button className='messaje-sincronize-button' onClick={() => toogleShow(false )}>
          Refresh
        </button>
      </div>
      </div>    
    )
  } else {
    return null;
  }
}

export { ChangeAlert };
