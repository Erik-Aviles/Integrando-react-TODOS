import React from 'react';
import {useNavigate} from 'react-router-dom';
import { TodoItem } from '../TodoItem';
import './TodoList.css';

export function TodoList(props){
/* const renderFunc = props.children || props.render */

const navegate = useNavigate()



  return(
    <section className='TodosList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos ) && props.onEmptyTodos()}
      <ul>
        {(!props.loading && !props.error) && props.searchedTodos.map(todo => (
          
          <TodoItem 
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => props.completeTodo(todo.id)}
            onDelete={() => props.eliminarTodo(todo.id)}
            onEdith={() => {
              navegate(
                `/edith/${todo.id}`,
                {
                  states: { todo }
                }
              ) 
            }}
          />
     
          
           ))
        }  
      </ul>
    </section>   
  );      
}
