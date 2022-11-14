import React from 'react';
import './TodoMain.css'

const TodoMain = ({children, loading}) => {
  return (
    <main className='Main-conteiner'>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, {loading}))
      }
    </main>
  );
}

export { TodoMain };
