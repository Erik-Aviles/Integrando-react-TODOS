import React from "react";

import './TodoCounter.css';

// Desestructuramos los props que pasamos al componente
export function TodoCounter({totalTodos, completedTodos, loading }) {

  return (
    <h2 
      className={`TodoCounter ${loading && 'TodoCouter--loading'}`}   >
      Has completado {completedTodos} de {totalTodos} Tareas
    </h2>
  );
}
  
