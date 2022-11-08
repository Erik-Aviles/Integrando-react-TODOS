import React from 'react';
import { useParams } from 'react-router-dom';
import { TodoFormulario } from '../../ui/TodoFormulario';
import { useTodos } from '../useTodos';

const EdithPage = (props) => {
  const params = useParams();
  const id = Number(params.id);

  const {stateUpdaters} = useTodos();
  const {edithTodo} = stateUpdaters;

  return (
    <TodoFormulario
      submitTitle='Editar la tarea'
      submitText='Guardar'
      numberTarea={id}
      submitEvent={(newText) => edithTodo(id, newText)}/>
  );
}

export { EdithPage };
