
import { useState } from 'react';

const useStorageListener = ( sincronize ) => {
  const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) =>{
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en Todos_v1');
        setStorageChange(true);
      }
    });

    const toogleShow = () =>{
      sincronize()
      setStorageChange(false)
    }
    
    return {
      show: storageChange,
      toogleShow,
    };
}


export{ useStorageListener } 
