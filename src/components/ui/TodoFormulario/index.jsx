import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

import '../TodoFormulario/TodoForm.css'

export const TodoFormulario = (props) => {
  const [newTodoValue, setNewTodoValue] = useState(props.submitTextArea || '');
  const [alert, setAlert] = useState(false);
  const navegate = useNavigate()

    const onChange = (event) => {
      setNewTodoValue(event.target.value)
    }
    const onCancelar = () => {
      navegate('/');
    }
    
    const onSubmit = (event) => {
      event.preventDefault();
      if (newTodoValue === '') {
        setTimeout(()=>{
          setAlert(false);
        }, 3000);
        setAlert(true);
      } else {
        setAlert(false);
        props.submitEvent(newTodoValue);
        navegate('/')
        
      }   
    }

  return (
    <form onSubmit={onSubmit}>
      <h3>{props.submitTitle}</h3>
      {alert && (<p>Espacio vacio</p>)}
      <textarea 
        value={newTodoValue}
        onChange={onChange}
        type='text' 
        placeholder='Escribe la tarea'/>
      <p>Task # {props.numberTarea}</p>
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancelar}
          >
            Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button--add"
          type='submit'
          >
            {props.submitText}
        </button>
      </div>
    </form>
  );
}


