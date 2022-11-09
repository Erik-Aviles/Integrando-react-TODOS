import React from 'react';
import {TodoFormulario} from '../../ui/TodoFormulario'
import { useTodos } from '../useTodos';

const NewPage = () => {
  const {states, stateUpdaters} = useTodos();
  const {loading, totalTodos} = states;
  const {addTodo} = stateUpdaters;

  if (loading) {
    return <p>Cargando ...</p>
  } else {
    return (
      <TodoFormulario
        submitTitle='Escribe tu nueva tarea'
        submitText='Agregar'
        numberTarea={totalTodos+1}
        submitEvent={addTodo}
      />
    );
  }
}

export { NewPage };
