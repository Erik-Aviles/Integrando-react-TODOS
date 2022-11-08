import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { TodoFormulario } from '../../ui/TodoFormulario';
import { useTodos } from '../useTodos';

const EdithPage = (props) => {

  const location = useLocation(); 

  const params = useParams();
  const id = Number(params.id);

  const {states, stateUpdaters} = useTodos();
  const {edithTodo} = stateUpdaters;
  const {loading, getTodo} = states;

  let todoText;


  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando ...</p>
  } else {
    const todo = getTodo(id)
    todoText = todo.text;
  }

  return (
    <TodoFormulario
      submitTitle='Editar la tarea'
      submitText='Guardar'
      submitTextArea={todoText}
      numberTarea={id}
      submitEvent={(newText) => edithTodo(id, newText)}
    />
  );
}

export { EdithPage };
