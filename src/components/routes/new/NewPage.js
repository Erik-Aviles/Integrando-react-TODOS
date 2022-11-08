import React from 'react';
import {TodoFormulario} from '../../ui/TodoFormulario'
import { useTodos } from '../useTodos';

const NewPage = () => {
  const {states, stateUpdaters} = useTodos();
  const {totalTodos} = states;
  const {addTodo} = stateUpdaters;
  return (
    <TodoFormulario
      submitTitle='Escribe tu nueva tarea'
      submitText='Agregar'
      numberTarea={totalTodos +1}
      submitEvent={addTodo}/>
  );
}

export { NewPage };
